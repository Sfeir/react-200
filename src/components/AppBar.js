import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.css';
import logo from './AppBar.logo.svg';

const AppBar = () => (
  <nav className="AppBar">
    <img className="AppBar-logo" src={logo} aria-label="people" alt="People" />
    <hr className="grow" />
    <NavLink to="/all">show all</NavLink>
    <hr />
    <NavLink to="/discover">discover</NavLink>
  </nav>
);

export default AppBar;
