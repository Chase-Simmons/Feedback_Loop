import React, { Component } from 'react';
import swal from 'sweetalert';
import './Feeling.css';

class Feeling extends Component {
  state = {
    inputValue: '',
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

  onNextClick = () => {
    if (this.state.inputValue !== '') {
      this.props.history.push('/understanding');
    } else {
      swal('Please fill out form before moving on!');
    }
  };
  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
        <p>Feeling?</p>
        <form onSubmit={this.onSubmit} display="inline">
          <button>Back</button>
          <input
            type="number"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          ></input>
          <button onClick={this.onNextClick}>Next</button>
        </form>
      </div>
    );
  }
}

export default Feeling;
