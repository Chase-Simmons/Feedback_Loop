import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Support extends Component {
  onSubmit = (event) => {
    console.log(event.target);
  };

  onNextClick = () => {
    console.log(this.props.store.submitReducer);
    axios
      .post('/feedback', this.props.store.submitReducer)
      .then((response) => {
        this.props.history.push('/feedback');
      })
      .catch((err) => {
        console.log('Error:', err);
        alert('ERROR');
      });
  };

  onBackClick = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <h3>Review Your Feedback</h3>

        <div>
          <p>
            Feelings: <span>{this.props.store.reviewReducer.feeling}</span>
          </p>
          <p>
            Understanding:{' '}
            <span>{this.props.store.reviewReducer.understanding}</span>
          </p>
          <p>
            Support: <span>{this.props.store.reviewReducer.support}</span>
          </p>
          <p>
            Comments: <span>{this.props.store.reviewReducer.comment}</span>
          </p>
        </div>
        <form display="inline">
          <button onClick={this.onBackClick}>Back</button>
          <button onClick={this.onNextClick}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Support);
