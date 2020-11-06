import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

let formObject = {
  feeling: '',
  understanding: '',
};
const setFeelingReducer = (state = null, action) => {
  if (action.type === 'SET_FEELING') {
    formObject.feeling = action.payload;
    return formObject;
  }
  return formObject;
};

const getFeelingReducer = (state = null, action) => {
  return formObject.feeling;
};

const setUnderstandingReducer = (state = null, action) => {
  if (action.type === 'SET_FEELING') {
    formObject.understanding = action.payload;
    return formObject;
  }
  return formObject;
};

const getUnderstandingReducer = (state = null, action) => {
  return formObject.understanding;
};

const storeInstance = createStore(
  combineReducers({
    setFeelingReducer,
    getFeelingReducer,
    setUnderstandingReducer,
    getUnderstandingReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
