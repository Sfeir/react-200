import React, { Fragment } from 'react';
import Person from './Person';

const ListAll = ({ people }) => (
  <Fragment>
    <div className="card-container">
      {people.map(person => <Person person={person} key={person.id} />)}
    </div>
    <div className="control-container">place SearchInput here</div>
  </Fragment>
);

export default ListAll;
