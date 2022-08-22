import React, { ReactNode } from 'react'
import Loader from '../Loader'
import { ButtonVariant, StyledButton } from './styled'

export { ButtonVariant }

interface Props {
  variant?: ButtonVariant
  children: ReactNode
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  variant = ButtonVariant.PRIMARY,
  children,
  onClick,
  loading,
  type,
}: Props) => {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={loading} type={type}>
      {loading && <Loader color="white" size="10px" />} {children}
    </StyledButton>
  )
}
