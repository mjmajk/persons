import styled from 'styled-components'
import { spacing } from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: ${spacing.s2};
  margin-bottom: ${spacing.s4};
`

export const SearchContainer = styled.div`
  background: ${({ theme }) => theme.colors.searchBar};
  height: 2rem;
  border-radius: 15px;
  align-items: center;
  display: flex;
  padding-left: ${spacing.s2};
  gap: ${spacing.s1};
  svg {
    height: 1rem;
  }
`

export const Input = styled.input`
  background: transparent;
  border: none;
  height: 1rem;
  outline: none;
`
