import React from 'react';
import PEOPLE from '../data/people.json';

import Person from './Person';

const randomPerson = PEOPLE[Math.floor(Math.random() * PEOPLE.length)];

const Discover = () => (
  <Person {...randomPerson} />
);

export default Discover;