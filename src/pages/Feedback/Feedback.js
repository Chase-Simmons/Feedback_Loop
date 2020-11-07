import React, { Component } from 'react';

import { connect } from 'react-redux';

class Support extends Component {
  onSubmit = (event) => {
    console.log(event.target);
  };

  onNextClick = () => {
    this.props.dispatch({
      type: 'RESET',
    });
    this.props.dispatch({
      type: 'SET_FEELING',
      payload: '',
    });
    this.props.dispatch({
      type: 'SET_UNDERSTANDING',
      payload: '',
    });
    this.props.dispatch({
      type: 'SET_SUPPORT',
      payload: '',
    });
    this.props.dispatch({
      type: 'SET_COMMENT',
      payload: '',
    });
    this.props.history.push('/');
  };

  // onBackClick = () => {
  //   this.props.history.goBack();
  // };

  render() {
    return (
      <div>
        <h3>Thank You!</h3>

        <form display="inline">
          {/* <button onClick={this.onBackClick}>Back</button> */}
          <button onClick={this.onNextClick}>Leave New Feedback</button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Support);
