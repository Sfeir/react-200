import React from 'react';
import './AppBar.css';
import logo from './AppBar.logo.svg';

const AppBar = ({show, toggleShow}) => (
  <nav className="AppBar">
    <img className="AppBar-logo" src={logo} aria-label="people" alt="People" />
    <hr/>
    <a href="#" onClick={toggleShow}>{show}</a>
  </nav>
);

export default AppBar;