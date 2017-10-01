import 'materialize-css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { setupVirtualServer } from './setup';
import App from './App';
import './index.css';

const startApp = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );
};

setupVirtualServer()
.then(startApp)
.catch(console.error);
