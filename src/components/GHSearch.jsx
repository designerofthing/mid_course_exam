import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios';

class GHSearch extends Component {
  state = {
    results: []
  };
  
  searchResponse = () => {
    axios.get(`https://api.github.com/search/users/q${}`)
  }

  return (
    <>
      <Input type="text" name="search" placeholder="Input GH username"/>
      <Button onClick={searchResponse}  name="search">Search</Button>
    </>
  )
}

export default GHSearch
