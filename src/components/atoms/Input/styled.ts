import styled from 'styled-components'
import { spacing } from 'theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.s1} 0;
`

export const StyledInput = styled.input<{ hasError: boolean }>`
  border-radius: 4px;
  padding: ${spacing.s2} ${spacing.s2};
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.danger : theme.colors.darkGray)};
  outline: none;
`

export const ErrorMessage = styled.span`
  color: red;
  line-height: 1rem;
  min-height: 1rem;
  font-size: 0.8rem;
`

export const Label = styled.label`
  margin-bottom: ${spacing.s1};
  font-weight: 500;
`
