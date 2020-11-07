import React, { Component } from 'react';
import FeedbackListItem from '../../components/FeedbackListItem/FeedbackListItem';
import axios from 'axios';
import './Admin.css';

import { connect } from 'react-redux';

class Admin extends Component {
  onClick = (id) => (event) => {
    axios({
      method: 'DELETE',
      url: `/feedback/${id}`,
    })
      .then((deleteMessage) => {
        axios
          .get('/feedback')
          .then((response) => {
            console.log(response.data);
            this.props.dispatch({
              type: 'SET_FEEDBACK',
              payload: response.data,
            });
          })
          .catch((err) => {
            console.log(err);
            alert('ERROR');
          });
      })
      .catch((err) => {
        console.log(err);
        alert('Could not delete data');
      });
  };
  render() {
    return (
      <div>
        <h3>All Feedback</h3>
        <div className="admin-box">
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Feeling</td>
                <td>Understanding</td>
                <td>Support</td>
                <td>Comment</td>
                <td>Date</td>
                <td>Delete</td>
              </tr>
            </thead>
            {this.props.store.feedbackList.map((item, index) => (
              <FeedbackListItem
                key={index}
                item={item}
                onClick={this.onClick}
              />
            ))}
          </table>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Admin);
