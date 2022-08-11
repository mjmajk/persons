import Logo from 'components/Logo'
import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const Container = styled.div`
  background: ${colors.darkGray};
  color: ${colors.headerText};
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`

const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default Header
