import React from 'react';
import Person from './Person';

const ListAll = ({ people }) => (
  <div className="card-container">
    {people.map(person => <Person person={person} key={person.id} />)}
  </div>
);

export default ListAll;
