import { useInfiniteQuery } from '@tanstack/react-query'
import { API } from 'API'

interface LabeledRecord {
  label: string
  primary: boolean
  value: string
}

export interface Person {
  id: string
  company_id: string
  email: Array<LabeledRecord>
  name: string
}

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
    ['personsList'],
    ({ pageParam }) => API.get('/persons', { limit: LIMIT, start: pageParam }),
    {
      getNextPageParam: (lastPage) => lastPage.additional_data.pagination.next_start,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  )
}
