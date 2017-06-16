import React from 'react';
import Person from './Person';

const ListAll = ({ people }) => (
  <div>
    <div className="card-container">
      { people.map(person => 
        <Person person={person} key={person.id} />
      )}
    </div>
    <div className="control-container">
      place SearchInput here
    </div>
  </div>  
);

export default ListAll;