import React from 'react';
import './Card.css';

const Card = ({ actions, children }) => (
  <section className="Card card">
    <div className="card-content">{children}</div>
    {actions && actions.length && <div className="card-action">{actions}</div>}
  </section>
);

const Avatar = ({ photoUrl, altText }) => (
  <img className="card-avatar" src={photoUrl} alt={altText} />
);

const Title = ({ mainTitle, subTitle }) => (
  <div className="card-title">
    <div>{mainTitle}</div>
    <div className="card-subtitle">{subTitle}</div>
  </div>
);

const Info = ({ icon, desc, children }) => (
  <div className="card-info">
    <i className="material-icons" title={desc || icon}>
      {icon}
    </i>
    <span>{children}</span>
  </div>
);

Card.Avatar = Avatar;
Card.Title = Title;
Card.Info = Info;

export default Card;
