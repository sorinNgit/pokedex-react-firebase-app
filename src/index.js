import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


