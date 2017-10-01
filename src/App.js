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
      <Person />
      <div style={{width: '75%'}}>
        <p>
          modify the <code>Person</code> component to display dynamic person data
          and use the <code>Card</code> component and its three sub-components:<br />
          <code>Avatar</code>, <code>Title</code> and <code>Info</code>.
        </p>
        <p>
          structure of person object:
        </p>
        <pre>{JSON.stringify(randomPerson, null, 2)}</pre>
      </div>
    </main>
  </div>
);

export default App;
