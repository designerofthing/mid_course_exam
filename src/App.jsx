import React from 'react'
import Header from './components/Title'
import GHSearch from './components/GHSearch'
import { Container } from 'semantic-ui-react'
import axios from 'axios';

const App = () => {
  state = {
    searchResult: [],
    message: '',
  };
  
  searchReq = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/search/users', {
        params: {q: e.target.children.search.value },
      });
      this.SpeechSynthesisUtterance({ searchResult: response.data.result });
    } catch (error) {
      let errorMessage = error.response.data.error_message || error.message;
      this.ListeningStateChangedEvent({ message: errorMessage });
    }
  };

  return (
    <Container>
      <section name="title">
        <Header />
      </section>
      <section name="main">
        <GHSearch/>
      </section>
      <p id='message'>{this.state.message}</p>
    </Container>
  )
}

export default App
