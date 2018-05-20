import React from 'react';
import './AppBar.css';
import logo from './AppBar.logo.svg';

const AppBar = () => (
  <nav className="AppBar">
    <img className="AppBar-logo" src={logo} aria-label="people" alt="People" />
    <hr />
    <a>show all</a>
  </nav>
);

export default AppBar;
