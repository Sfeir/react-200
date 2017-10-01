import React from 'react';
import Card from './Card';

const Person = () => (
  <section class="Card card">
    <div class="card-content">
      <img class="card-avatar" src="https://randomuser.me/portraits/women/81.jpg" alt="face of Mercedes" />
      <div class="card-title">
        <div>
          <a href="/person/idOfMercedes">Mercedes Hebert</a>
        </div>
        <div class="card-subtitle">QUINTITY</div>
      </div>
      <div class="card-info">
        <i class="material-icons" title="email">email</i>
        <span>
          <a href="mailto:Mercedes.Hebert@QUINTITY.com">Mercedes.Hebert@QUINTITY.com</a>
        </span>
      </div>
      <div class="card-info">
        <i class="material-icons" title="phone">phone</i>
        <span>
          <a href="tel:0125878522">0125878522</a>
        </span>
      </div>
      <div class="card-info">
        <i class="material-icons" title="manager">supervisor_account</i>
        <span>
          <a href="/person/idOfMclaughlin">Mclaughlin</a>
        </span>
      </div>
    </div>
  </section>
);

export default Person;