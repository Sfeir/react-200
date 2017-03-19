import React from 'react';
import './Card.css';

const Card = ({children}) => (
  <section className="Card card">
    <div className="card-content">
      {children}
    </div>
  </section>  
);

Card.Avatar = ({photoUrl, altText}) => (
  <img className="card-avatar" src={photoUrl} alt={altText} />
);

Card.Title = ({mainTitle, subTitle}) => (
  <div className="card-title">
    <div>
      {mainTitle}
    </div>
    <div className="card-subtitle">
      {subTitle}
    </div>
  </div>
);

Card.Info = ({icon, desc, children}) =>  (
  <div className="card-info">
    <i className="material-icons" title={desc || icon}>{icon}</i>
    <span>{children}</span>
  </div>
);

export default Card;