import React, { Component } from 'react';

import { connect } from 'react-redux';

class Admin extends Component {
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

export default connect(mapStoreToProps)(Admin);
