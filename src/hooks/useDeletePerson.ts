import { useMutation, useQueryClient } from '@tanstack/react-query'
import { API, replaceId, Routes } from 'API'
import { Tags } from 'types'
import { displayNotification } from 'utils/notifications'

export const useDeletePerson = () => {
  const queryClient = useQueryClient()

  return useMutation((id: string) => API.delete(replaceId(Routes.DELETE_PERSON, id)), {
    onSuccess: (data) => {
      queryClient.invalidateQueries([Tags.PERSONS])
      if (data.success) {
        displayNotification('success', 'Success', 'User was deleted')
      } else {
        displayNotification('danger', 'Error', 'User could not be deleted')
      }
    },
    onError: () => {
      displayNotification('danger', 'Error', 'User could not be deleted')
    },
  })
}
