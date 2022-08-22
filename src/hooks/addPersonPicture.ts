import { useMutation, useQueryClient } from '@tanstack/react-query'
import { API, replaceId, Routes } from 'API'
import { Person } from 'types'
import { displayNotification } from 'utils/notifications'

interface Variables {
  id: string
  body: FormData
}

interface Response {
  success: true
  data: Person
}

export const useAddPersonPicture = () => {
  const queryClient = useQueryClient()
  return useMutation<Response, Error, Variables>(
    ({ id, body }) => API.postFormData(replaceId(Routes.ADD_PERSON_PICTURE, id), body),
    {
      onSuccess: (data) => {
        if (!data.success) {
          displayNotification('danger', 'Error', 'We could not upload your image')
        } else {
          displayNotification('success', 'Success', 'Picture was updated')
          queryClient.invalidateQueries()
        }
      },
      onError: () => {
        displayNotification('danger', 'Error', 'We could not upload your image')
      },
    },
  )
}
