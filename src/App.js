import React from 'react';
import './App.css';

import PEOPLE from './data/people.json';

import AppBar from './components/AppBar';
import Discover from './components/Discover';

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <Discover people={PEOPLE} />
    </main>
  </div>
);

export default App;
