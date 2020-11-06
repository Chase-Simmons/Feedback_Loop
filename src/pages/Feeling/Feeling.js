import React, { Component } from 'react';

class Feeling extends Component {
  state = {
    inputValue : 1;
  }
  onSubmit = (event) => {
    console.log(event.target);
  };
  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
        <p>Feeling?</p>
        <form onSubmit={this.onSubmit} display="inline">
          <input type="number" value={this.state.inputValue} onChange ></input>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default Feeling;
