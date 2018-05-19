import React from 'react';

const Person = () => (
  <section className="Card card">
    <div className="card-content">
      <img
        className="card-avatar"
        src="https://randomuser.me/portraits/women/81.jpg"
        alt="face of Mercedes"
      />
      <div className="card-title">
        <div>
          <a href="/person/idOfMercedes">Mercedes Hebert</a>
        </div>
        <div className="card-subtitle">QUINTITY</div>
      </div>
      <div className="card-info">
        <i className="material-icons" title="email">
          email
        </i>
        <span>
          <a href="mailto:Mercedes.Hebert@QUINTITY.com">
            Mercedes.Hebert@QUINTITY.com
          </a>
        </span>
      </div>
      <div className="card-info">
        <i className="material-icons" title="phone">
          phone
        </i>
        <span>
          <a href="tel:0125878522">0125878522</a>
        </span>
      </div>
      <div className="card-info">
        <i className="material-icons" title="manager">
          supervisor_account
        </i>
        <span>
          <a href="/person/idOfMclaughlin">Mclaughlin</a>
        </span>
      </div>
    </div>
  </section>
);

export default Person;
