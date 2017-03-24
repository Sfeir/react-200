import React from 'react';

import PEOPLE from '../data/people.json';
import Person from './Person';

const ListAll = () => (
  <div className="card-container">
    { PEOPLE.map(person => 
      <Person {...person} key={person.id} />
    )}
  </div>
);

export default ListAll;