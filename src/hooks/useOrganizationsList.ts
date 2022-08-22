import { useQuery } from '@tanstack/react-query'
import { API, Routes } from 'API'
import { Company, PaginationResponse, Tags } from 'types'

export const useOrganizationsList = () => {
  return useQuery<PaginationResponse<Company[]>>([Tags.ORGANIZATIONS_LIST], () =>
    API.get(Routes.ORGANIZATIONS),
  )
}
