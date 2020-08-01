import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { ErrorBoundry, FootballService } from './components';

import App from './components/App';

import { FootballAPIService } from './services';

ReactDOM.render(
  <ErrorBoundry>
    <FootballService.Provider value={FootballAPIService}>
      <App />
    </FootballService.Provider>
  </ErrorBoundry>
, document.getElementById('root'));