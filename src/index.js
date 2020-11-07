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
  support: '',
  comment: '',
};
const feelingReducer = (state = formObject.feeling, action) => {
  if (action.type === 'SET_FEELING') {
    formObject.feeling = action.payload;
    state = action.payload;
    return state;
  }
  return state;
};

const understandingReducer = (state = formObject.understanding, action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    formObject.understanding = action.payload;
    state = action.payload;
    return state;
  }
  return state;
};
const supportReducer = (state = formObject.support, action) => {
  if (action.type === 'SET_SUPPORT') {
    formObject.support = action.payload;
    state = action.payload;
    return state;
  }
  return state;
};
const commentReducer = (state = formObject.comment, action) => {
  if (action.type === 'SET_COMMENT') {
    formObject.comment = action.payload;
    state = action.payload;
    return state;
  }
  return state;
};

const resetFormReducer = (state = null, action) => {
  if (action.type === 'RESET') {
    formObject = {
      feeling: '',
      understanding: '',
      support: '',
      comment: '',
    };
  }
  return state;
};

const reviewReducer = (state = null, action) => {
  return formObject;
};

const submitReducer = (state = null, action) => {
  return formObject;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
    reviewReducer,
    submitReducer,
    resetFormReducer,
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
