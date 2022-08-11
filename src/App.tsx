import Header from 'components/Header'
import { PersonsList } from 'components/PersonsList'
import { data } from './data'
import { useAddPerson } from 'hooks/addPerson'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import './App.css'

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
`

const App = () => {
  return (
    <Container>
      <Header />
      <PersonsList />
    </Container>
  )
}

export default App
