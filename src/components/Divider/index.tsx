import React from 'react'
import styled from 'styled-components'

interface Props {}

const Container = styled.div`
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  margin-bottom: 2rem;
`

const Divider = (props: Props) => {
  return <Container />
}

export default Divider
