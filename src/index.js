import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './components/App';
import reducer from './store/reducer';

const store = createStore(reducer)

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);
