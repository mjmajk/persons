import { API } from 'API'

interface Values {
  name: string
  email: string
  phone: string
}

export const useAddPerson = () => {
  const add = (values: Values) => {
    API.post('/persons', values)
  }

  return { add }
}
