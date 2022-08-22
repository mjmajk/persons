import { useQuery } from '@tanstack/react-query'
import { API, replaceId, Routes } from 'API'
import { Person, Tags } from 'types'

interface Response {
  data: Person
}

export const usePersonDetail = (id: string) => {
  return useQuery<Response>(
    [Tags.PERSONS, id],
    () => API.get(replaceId(Routes.PERSON_DETAIL, id)),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  )
}
