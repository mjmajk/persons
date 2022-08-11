import styled from 'styled-components'
import { colors } from 'theme'

export const Container = styled.div`
  border: 1px solid ${colors.border};
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
  margin-bottom: 1rem;
`

export const Name = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`
