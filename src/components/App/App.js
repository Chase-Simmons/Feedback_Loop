import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import BackgroundVid from '../../background/Video.mp4';

import Header from '../Header/Header';
import FeelingPage from '../../pages/Feeling/Feeling';
import SupportPage from '../../pages/Support/Support';
import UnderstandingPage from '../../pages/Understanding/Understanding';
import CommentPage from '../../pages/Comments/Comments';

class App extends Component {
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
                <Route exact path="/support" component={SupportPage} />
                <Route
                  exact
                  path="/understanding"
                  component={UnderstandingPage}
                />
                <Route exact path="/comment" component={CommentPage} />
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
