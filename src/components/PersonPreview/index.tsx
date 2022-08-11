import { CompanyInfo } from 'components/PersonPreview/ComponayInfo'
import { Person } from 'hooks/usePersonsList'
import React, { FC } from 'react'
import Avatar from './Avatar'
import { Container, Name } from './styled'

interface Props {
  person: Person
  onClick: () => void
}

const PersonPreview: FC<Props> = ({ person, onClick }) => {
  return (
    <Container onClick={onClick}>
      <div>
        <Name>{person.name}</Name> <CompanyInfo name={person.company_id} />
      </div>
      <Avatar name={person.name} />
    </Container>
  )
}

export default PersonPreview
