import React, { Component } from 'react';

class Feeling extends Component {
  state = {
    inputValue: 1,
  };
  onSubmit = (event) => {
    console.log(event.target);
  };
  onInputChange = (event) => {
    if (event.target.value > 5) {
      this.setState({
        inputValue: 5,
      });
    } else if (event.target.value < 1) {
      this.setState({
        inputValue: 1,
      });
    } else {
      this.setState({
        inputValue: event.target.value,
      });
    }
  };
  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
        <p>Feeling?</p>
        <form onSubmit={this.onSubmit} display="inline">
          <input
            type="number"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          ></input>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default Feeling;
