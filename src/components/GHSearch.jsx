import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  state = {
    searchResult: [],
    message: '',
  };
  componentDidMount() {
    
  }
  return (
    <>
      <Input type="text" name="search" placeholder="Input GH username"/>
      <Button name="search">Search</Button>
    </>
  )
}

export default GHSearch
