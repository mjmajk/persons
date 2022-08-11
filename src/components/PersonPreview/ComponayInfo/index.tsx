import React, { FC } from 'react'
import { Container } from './styled'
import BuildingIcon from 'components/PersonPreview/BuildingIcon'
interface Props {
  name: string
}
export const CompanyInfo: FC<Props> = ({ name }) => {
  return (
    <Container>
      <BuildingIcon />
      {name}
    </Container>
  )
}
