import React, { Component } from "react";
import axios from "axios";

class FOForm extends Component {
  state = {
    greeting: "",
    name: "",
    message: "",
  };

  sendRequest = async () => {
    debugger
    try {
     const result = await axios.get(
        `https://www.foaas.com/fascinating/${this.state.name}`, {
          headers: {
            Accept: "application/json",
          'Content-Type': 'application/json',}
        }
      ); 
      this.setState({ greeting: result.data.message });
      debugger
    } catch (error) {
      let errorMessage = error.message;
      this.setState({ error: errorMessage });
    }
  };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            id="name-input"
            type="text"
            placeholder="name"
          />
          <button onClick={() => this.sendRequest()} id="button">
            submit
          </button>
        </form>
        <h1 id='greeting' >{this.greeting}</h1>
        <p>{this.message}</p>
      </div>
    );
  }
}

export default FOForm;
