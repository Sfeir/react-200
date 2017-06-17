import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Discover from './pages/Discover';
import ListAll from './pages/ListAll';
import Person from './pages/Person';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

class App extends Component {
  componentDidMount() {
    this.props.loadPeople()
    .then(success => !success && alert('could not load people :('));
  }

  render() {
    const { people, savePerson } = this.props;
    return (
      <div className="App">
        <header>
          <AppBar />
        </header>
        <main>
          { people.length === 0
          ? <Spinner />
          : <Switch>
              <Route path="/all" render={() =>
                <ListAll people={people} />
              } />
              <Route path="/discover" render={() =>
                <Discover people={people} />
              } />
              <Route path="/person/:id" render={({match}) =>
                <Person
                  person={people.find(person => person.id === match.params.id)}
                  onSave={savePerson}
                />
              } />
              <Redirect to="/all" />
            </Switch>
          }
        </main>
      </div>
    );
  }
} 

export default App;
