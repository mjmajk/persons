import { useInfiniteQuery } from '@tanstack/react-query'
import { API, Routes } from 'API'
import { Person, Tags } from 'types'

export const LIMIT = 10

interface Response {
  additional_data: {
    pagination: {
      limit: number
      more_items_in_collection: boolean
      next_start: number
      start: number
    }
  }
  data: Person[]
}

export const usePersonsList = () => {
  return useInfiniteQuery<Response>(
    [Tags.PERSONS],
    ({ pageParam }) =>
      API.get(Routes.PERSONS_LIST, { limit: LIMIT, start: pageParam, sort: 'id DESC' }),
    {
      getNextPageParam: (lastPage) => lastPage.additional_data.pagination.next_start,
      refetchOnWindowFocus: false,
    },
  )
}
