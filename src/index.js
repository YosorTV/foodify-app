//Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import App from './App';

// Store
import { store } from './store/init/store';

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);