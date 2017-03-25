import 'materialize-css';

import React from 'react';
import ReactDOM from 'react-dom';

import { setupVirtualServer } from './setup';
import App from './App';
import './index.css';

const startApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

setupVirtualServer()
.then(startApp)
.catch(console.error);
