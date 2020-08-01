import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { ErrorBoundry } from './components';

import App from './components/App';

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>
, document.getElementById('root'));