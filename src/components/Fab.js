import React from 'react';
import './Fab.css';

const Fab = ({ kind, large, onClick }) => (
  <button
    className={`Fab btn-default btn-floating waves-effect waves-light ${large &&
      'btn-large'}`}
    onClick={onClick}
  >
    <i className="material-icons">{kind}</i>
  </button>
);

export default Fab;
