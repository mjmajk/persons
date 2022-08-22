import styled from 'styled-components'
import { spacing } from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem;
  min-height: 50vh;
  align-items: center;
`

export const Name = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  margin: ${spacing.s2} 0;
`

export const Phone = styled.div`
  color: ${({ theme }) => theme.colors.phone};
  margin-bottom: ${spacing.s4};
`

export const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: ${spacing.s4};
  row-gap: ${spacing.s4};
`

export const Label = styled.div`
  font-weight: 500;
  text-align: right;
`

export const Value = styled.div``
