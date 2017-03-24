import React from 'react';
import './App.css';
import PEOPLE from './data/people.json';

import AppBar from './components/AppBar';
import Person from './components/Person';

const randomPerson = PEOPLE[Math.floor(Math.random() * PEOPLE.length)];

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <Person {...randomPerson} />
    </main>
  </div>
);

export default App;
