import React from 'react';
import './Card.css';

const Card = ({children}) => (
  <section className="Card card">
    <div className="card-content">
      {children}
    </div>
  </section>  
);

const Title = ({subtitle, children}) => (
  <div class="card-title">
    <div>
      {children}
    </div>
    <div class="card-subtitle">{subtitle}</div>
  </div>
);

Card.Title = Title;

// add an Avatar and Info sub-component
// to be used in Person

export default Card;