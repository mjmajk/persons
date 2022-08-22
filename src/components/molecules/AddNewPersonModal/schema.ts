import * as Yup from 'yup'

const phoneRegex = /^(\+\d{3}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{3}$/

export interface FormValues {
  name: string
  email: string
  phone: string
  org_id: string
}

export const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required'),
  phone: Yup.string().matches(phoneRegex, 'Insert phone in format +420 123 456 789'),
  email: Yup.string().email('Invalid email').required('Required'),
})

export const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  org_id: '',
}
