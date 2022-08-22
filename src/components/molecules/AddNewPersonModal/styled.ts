import styled from 'styled-components'
import { spacing } from 'theme'

export const Container = styled.div`
  padding: 2rem;
  min-height: 50vh;
  align-items: center;
`

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
`

export const MissingOrganizationWarning = styled.div`
  margin: ${spacing.s2} 0;
  color: ${({ theme }) => theme.colors.warning};
`
