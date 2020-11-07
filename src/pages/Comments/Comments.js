import React, { Component } from 'react';

import { connect } from 'react-redux';

class Comment extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      inputValue: this.props.store.commentReducer,
    });
  }
  onSubmit = (event) => {
    console.log(event.target);
  };

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onNextClick = () => {
    this.props.dispatch({
      type: 'SET_COMMENT',
      payload: this.state.inputValue,
    });
    this.props.history.push('/review');
  };

  onBackClick = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <h3>Any comments you want to leave?</h3>
        <p>Comments</p>
        <form onSubmit={this.onSubmit} display="inline">
          <button onClick={this.onBackClick}>Back</button>
          <input
            type="text"
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

export default connect(mapStoreToProps)(Comment);
