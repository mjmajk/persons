import Logo from 'components/atoms/Logo'
import styled from 'styled-components'
import { spacing } from 'theme'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.headerText};
  padding: ${spacing.s2} ${spacing.s4};
  margin-bottom: 0rem;
`

const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default Header
