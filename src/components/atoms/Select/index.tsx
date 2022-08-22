import { useField } from 'formik'
import { Container, ErrorMessage, Label, StyledInput } from './styled'

interface Props {
  name: string
  label: string
  options: Array<{ label: string; value: string }> | null
}

const Select = ({ name, label, options }: Props) => {
  const [field, meta] = useField(name)

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        disabled={!options || options.length === 0}
        onChange={field.onChange}
        name={name}
        as="select"
        value={field.value}
        placeholder="Select company"
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        <option></option>
      </StyledInput>
      <ErrorMessage>{meta.error}</ErrorMessage>
    </Container>
  )
}

export default Select
