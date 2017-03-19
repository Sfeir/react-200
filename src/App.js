import React from 'react';
import './App.css';

import AppBar from './components/AppBar';
import Card from './components/Card';

const MESSAGE = 'React-200 @ SFEIR';

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <Card title={MESSAGE} />
    </main>
  </div>
);

export default App;
