import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios';

class GHSearch extends Component {
  state = {
    search: '',
    items: []
  };
  
  async searchResponse() {
    const results = await axios.get(`https://api.github.com/search/users?q=${this.state.search}`)
    debugger
    this.setState({ items: results.data.items })
  }

  setValue = (event) => {
    this.setState({ search: event.target.value })
  }
  render() {

    let itemDisplay = this.state.items.map(item => {
      return (
        <li>{item.login}</li>
      )
    })

  return (
    <>
      <Input 
        onChange={e => this.setValue(e)}
        type="text" 
        name="search" 
        placeholder="Input GH username"
      />
      <Button 
        onClick={this.searchResponse.bind(this)}  
        name="search">
        Search
      </Button>
      <ul id='result'>
        {itemDisplay}
        </ul>
    </>
  )}
}

export default GHSearch
