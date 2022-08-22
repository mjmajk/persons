import Header from 'components/molecules/Header'
import styled from 'styled-components'

import './App.css'
import 'react-notifications-component/dist/theme.css'
import { Persons } from 'components/molecules/Persons'
import { Modals } from 'components/molecules/Modals'

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
`

const App = () => {
  return (
    <Container>
      <Header />
      <Persons />
      <Modals />
    </Container>
  )
}

export default App
