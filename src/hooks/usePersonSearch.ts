import { useInfiniteQuery } from '@tanstack/react-query'
import { API, Routes } from 'API'
import { useSearchValue } from 'store/search'
import { PaginationResponse, Person, Tags } from 'types'

export const LIMIT = 10

type Response = PaginationResponse<{
  items: Array<{
    item: Person
    result_score: number
  }>
}>

export const usePersonSearch = () => {
  const searchValue = useSearchValue((state) => state.value)

  return useInfiniteQuery<Response>(
    [Tags.PERSONS_SEARCH, searchValue],
    ({ pageParam }) =>
      API.get(Routes.PERSONS_SEARCH, {
        limit: LIMIT,
        start: pageParam || 0,
        fields: 'name',
        term: searchValue,
      }),
    {
      getNextPageParam: (lastPage) => lastPage.additional_data.pagination.next_start,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  )
}
