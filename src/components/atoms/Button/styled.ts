import styled, { css } from 'styled-components'
import { spacing } from 'theme'

export enum ButtonVariant {
  PRIMARY = 'primary',
  DANGER = 'danger',
  GHOST = 'ghost',
}

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  border: none;
  border-radius: 15px;
  padding: ${spacing.s1} ${spacing.s4};
  color: white;
  background: ${({ variant, disabled, theme }) =>
    disabled ? theme.colors.buttonHover[variant] : theme.colors.button[variant]};
  &:hover {
    background: ${({ variant, theme }) => theme.colors.buttonHover[variant]};
  }
  cursor: pointer;
  display: flex;
  gap: ${spacing.s1};
  align-items: center;
  ${({ variant, theme }) =>
    variant === ButtonVariant.GHOST &&
    css`
      border: 1px solid ${theme.colors.button.primary};
      border-radius: 0;
      color: black;
    `}
`
