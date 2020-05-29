import React from 'react'
import Header from './components/Title'
import { Container } from 'semantic-ui-react'
import FOForm from './components/FOForm'

const App = () => {
  return (
    <Container>
      <section name="title">
        <Header />
      </section>
      <section name="main">
        
      </section>
      <section>
        <FOForm />
      </section>
    </Container>
  )
}

export default App
