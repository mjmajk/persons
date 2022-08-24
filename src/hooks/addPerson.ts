import { useMutation, useQueryClient } from '@tanstack/react-query'
import { API, Routes } from 'API'
import { FormValues } from 'components/molecules/AddNewPersonModal/schema'
import { useModalStore } from 'store/modal'
import { Person } from 'types'
import { displayNotification } from 'utils/notifications'

interface Params {
  values: FormValues
  image?: File | null
}

interface Response {
  success: true
  data: Person
}

export const useAddPerson = () => {
  const queryClient = useQueryClient()
  const closeModal = useModalStore((state) => state.closeModal)

  const data = useMutation<Response, Error, Params>(
    ({ values }) => API.post(Routes.ADD_PERSON, JSON.stringify(values)),
    {
      onSuccess: (data, variables) => {
        if (!data.success) {
          return
        }
        displayNotification('success', 'Success', 'User was created')

        if (variables.image) {
          const formData = new FormData()
          formData.append('file', variables.image)
        } else {
          queryClient.invalidateQueries()
          closeModal()
        }
      },
    },
  )

  return { ...data, isLoading: data.isLoading }
}
