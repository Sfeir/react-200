import React from 'react';
import './Card.css';

const Card = props => (
  <section className="Card card">
    <div className="card-content">
      <div className="card-title">{props.title}</div>
    </div>
  </section>
);

export default Card;
