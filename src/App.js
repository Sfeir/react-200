import React from 'react';
import './App.css';

import AppBar from './components/AppBar';
import Discover from './components/Discover';

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <Discover />
    </main>
  </div>
);

export default App;
