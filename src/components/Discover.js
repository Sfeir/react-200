import React from 'react';

import Person from './Person';

const Discover = ({ people }) => (
  <Person person={people[Math.floor(Math.random() * people.length)]} />
);

export default Discover;