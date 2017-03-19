import React from 'react';
import './App.css';

const MESSAGE = 'React-200 @ SFEIR';

const App = () => (
  <div className="App">
    <header>
      insérez votre AppBar ici
    </header>
    <main>
      insérez votre Card ici
      et passez "{MESSAGE}" comme prop
    </main>
  </div>
);

export default App;
