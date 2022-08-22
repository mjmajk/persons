import { useField } from 'formik'
import { Container, ErrorMessage, Label, StyledInput } from './styled'

interface Props {
  name: string
  label: string
}

const Input = ({ name, label }: Props) => {
  const [field, meta] = useField(name)

  const error = meta.touched && meta.error

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput hasError={!!error} type="text" {...field} />
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  )
}

export default Input
