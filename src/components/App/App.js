import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

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
            <Route exact path="/" component={FeelingPage} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/understanding" component={UnderstandingPage} />
            <Route exact path="/comment" component={CommentPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
