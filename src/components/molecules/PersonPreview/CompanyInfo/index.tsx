import { FC } from 'react'
import { Container, StyledBuildingIcon } from './styled'
interface Props {
  name: string
}
export const CompanyInfo: FC<Props> = ({ name }) => {
  return (
    <Container>
      <StyledBuildingIcon />
      {name || 'none'}
    </Container>
  )
}
