import React, { Component } from 'react';
import axios from 'axios';

class FOForm extends Component {
  state = {
    greeting: '',
    name: '',
    message: ''
  }

  sendRequest = async () => {
    let result 
    try {
      result= await axios.get(`https://www.foaas.com/blackadder/${this.state.name}/Steve`)
      this.setState({ greeting: result })

    } catch (error) {
      let errorMessage = error.message
      this.setState({ error: errorMessage });
    }
  };
  handleSubmit = (event) => {
    this.setState({ name: event.target.value })
    debugger
  }


  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id='name-input' type='text' placeholder='name'/>
          <button onClick={this.sendRequest} id='button'>submit</button>
        </form>
        <h1>{this.state.greeting}</h1>
      </div>
    )
  }
}

export default FOForm
