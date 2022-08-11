import styled from 'styled-components'
import { colors } from 'theme'

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
  margin: 0.5rem 0;
`

export const Phone = styled.div`
  color: ${colors.phone};
  margin-bottom: 1rem;
`

export const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
  row-gap: 1rem;
`

export const Label = styled.div`
  font-weight: 500;
  text-align: right;
`

export const Value = styled.div``
