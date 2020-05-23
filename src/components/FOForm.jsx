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
  handleChange = (event) => {
    this.setState({ name: event.target.value })
    debugger
  }


  render() {

    return (
      <div>
        <form >
          <input onChange={this.handleChange} id='name-input' type='text' placeholder='name'/>
          <button onClick={this.sendRequest} id='button'>submit</button>
        </form>
        <h1>{this.greeting}</h1>
      </div>
    )
  }
}

export default FOForm
