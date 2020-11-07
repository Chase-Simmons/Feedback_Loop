import React, { Component } from 'react';
import FeedbackListItem from '../../components/FeedbackListItem/FeedbackListItem';
import './Admin.css';

import { connect } from 'react-redux';

class Admin extends Component {
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
              </tr>
            </thead>
            {this.props.store.feedbackList.map((item, index) => (
              <FeedbackListItem key={index} item={item} />
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
