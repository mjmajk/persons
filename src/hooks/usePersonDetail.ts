import { useQuery } from '@tanstack/react-query'
import { API } from 'API'
import { LabeledRecord } from 'types'

interface Response {
  data: {
    first_name: string
    primary_email: string
    name: string
    phone: LabeledRecord[]
    company_id: number
  }
}

export const usePersonDetail = (id: string) => {
  return useQuery<Response>(['detail', id], () => API.get(`/persons/${id}`))
}
