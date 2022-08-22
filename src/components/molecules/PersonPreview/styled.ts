import styled from 'styled-components'
import { spacing } from 'theme'
import { Trash } from '@styled-icons/bootstrap/Trash'

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 ${spacing.s2};
  padding: ${spacing.s2} ${spacing.s4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }

  margin-bottom: ${spacing.s4};
`

export const Name = styled.div`
  font-weight: 500;
  margin-bottom: ${spacing.s1};
`

export const DeleteIcon = styled(Trash)`
  color: ${({ theme }) => theme.colors.button.danger};
  height: 1.5rem;
  padding: 0.25rem;
  border-radius: 50%;
  &:hover {
    background: ${({ theme }) => theme.colors.transparentBlack};
  }
`
