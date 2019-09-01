import React, { Component } from "react";

class Child extends Component {
  state = {
    value: 1
  };
  handleIncrement = () => {
    this.setState(prevState => ({
      // Note this paren! It is essential.
      value: prevState.value + 1 // Note lack of mutation!
    }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
export default Child;
