import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Discover from './pages/Discover.container';
import ListAll from './pages/ListAll.container';
import Person from './pages/Person.container';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

const App = ({ loadPeople, peopleLoading }) => {
  useEffect(() => {
    loadPeople().then(success => !success && alert('could not load people :('));
  }, []);

  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
        {peopleLoading ? (
          <Spinner />
        ) : (
          <Switch>
            <Route path="/all" component={ListAll} />
            <Route path="/discover" component={Discover} />
            <Route path="/person/:id" component={Person} />
            <Redirect to="/all" />
          </Switch>
        )}
      </main>
    </div>
  );
};

export default App;
