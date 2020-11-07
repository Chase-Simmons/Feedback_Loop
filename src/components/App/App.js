import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import BackgroundVid from '../../background/Video.mp4';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import FeelingPage from '../../pages/Feeling/Feeling';
import SupportPage from '../../pages/Support/Support';
import UnderstandingPage from '../../pages/Understanding/Understanding';
import CommentPage from '../../pages/Comments/Comments';
import ReviewPage from '../../pages/Review/Review';
import FeedbackPage from '../../pages/Feedback/Feedback';
import AdminPage from '../../pages/Admin/Admin';

class App extends Component {
  componentDidMount() {
    this.getAllFeedback();
  }

  getAllFeedback = () => {
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
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <video autoPlay loop className="video-background" muted playsInline>
              <source src={BackgroundVid} type="video/mp4" />
            </video>
            <div className="main-container">
              <div className="main-center-box">
                <Route exact path="/" component={FeelingPage} />
                <Route
                  exact
                  path="/understanding"
                  component={UnderstandingPage}
                />
                <Route exact path="/support" component={SupportPage} />
                <Route exact path="/comment" component={CommentPage} />
                <Route exact path="/review" component={ReviewPage} />
                <Route exact path="/feedback" component={FeedbackPage} />
                <Route exact path="/admin" component={AdminPage} />
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}
const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(App);
