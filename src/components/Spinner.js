import React from 'react';
import './Spinner.css';

const Spinner = () => (
  <div className="Spinner">
    <div className="preloader-wrapper big active">
      <div className="spinner-layer">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  </div>
);

export default Spinner;
