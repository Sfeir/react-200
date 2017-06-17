import 'materialize-css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Formsy from 'formsy-react';

import { setupVirtualServer } from './setup';
import App from './App';
import './index.css';

const startApp = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

setupVirtualServer()
.then(startApp)
.catch(console.error);

Formsy.addValidationRule('isFrenchPhoneNumber', (_, value) => (
  /^0[0-9]{9}$/.test(value)
));
