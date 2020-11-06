import React, { Component } from 'react';
import swal from 'sweetalert';

import { connect } from 'react-redux';

class Understand extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      inputValue: this.props.store.getFeelingReducer,
    });
  }
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
      this.props.dispatch({
        type: 'SET_FEELING',
        payload: this.state.inputValue,
      });
      this.props.history.push('/support');
    } else {
      swal('Please fill out form before moving on!');
    }
  };

  onBackClick = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <h3>How well are you understanding the content?</h3>
        <p>Understand?</p>
        <form onSubmit={this.onSubmit} display="inline">
          <button onClick={this.onBackClick}>Back</button>
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

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Understand);
