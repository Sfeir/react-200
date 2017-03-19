import React from 'react';
import './App.css';
import PEOPLE from './data/people.json';

import AppBar from './components/AppBar';

const randomPerson = PEOPLE[Math.floor(Math.random() * PEOPLE.length)];

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      {/*remplacez ce qui suit avec votre composant Person*/}
      <div style={{width: '75%'}}>
        <p>
          créez un composant <code>Person</code> qui se sert du
          composant <code>Card</code> que vous modifierez pour supporter les trois
          sous-éléments: <code>Avatar</code>, <code>Title</code> et <code>Info</code>.
        </p>
        <p>
          Infos à afficher:
        </p>
        <pre>{JSON.stringify(randomPerson, null, 2)}</pre>
      </div>
    </main>
  </div>
);

export default App;
