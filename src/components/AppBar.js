import React from 'react';
import { Route } from 'react-router-dom';
import './AppBar.css';
import logo from './AppBar.logo.svg';

const NavRadioButton = ({ to, children }) => (
  <Route path={to}>
    {({ match, history }) => (
      <label>
        <input
          type="radio"
          name="nav"
          checked={!!match}
          onClick={() => !match && history.push(to)}
        />
        <span className="white-text">{children}</span>
      </label>
    )}
  </Route>
);

const AppBar = () => (
  <nav className="AppBar">
    <img className="AppBar-logo" src={logo} aria-label="people" alt="People" />
    <hr className="grow" />
    <NavRadioButton to="/all">show all</NavRadioButton>
    <hr />
    <NavRadioButton to="/discover">discover</NavRadioButton>
  </nav>
);

export default AppBar;
