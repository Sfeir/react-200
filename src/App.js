import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { fetchPeople, updatePerson } from './service/people';
import { replaceOrPrepend } from './utils';

import Discover from './pages/Discover';
import ListAll from './pages/ListAll';
import Person from './pages/Person';

import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

const merge = replaceOrPrepend((a, b) => a.id === b.id);
const setPeople = people => () => ({ people });
const setPerson = person => ({ people }) => ({ people: merge(person, people) })

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null
    };
  }

  componentDidMount() {
    this.loadPeople()
    .then(success => !success && alert('could not load people :('));
  }

  loadPeople() {
    return (
      fetchPeople()
      .then(people => {
        this.setState(setPeople(people));
        return true;
      })
      .catch(e => {
        console.error(e);
        return false;
      })
    );
  }

  savePerson(id, partialPerson) {
    return (
      updatePerson(id, partialPerson)
      .then(person => {
        this.setState(setPerson(person));
        return true;
      })
      .catch(e => {
        console.error(e);
        return false;
      })
    );
  }

  onSave = (id, partial) => this.savePerson(id, partial);

  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <header>
          <AppBar />
        </header>
        <main>
          { people === null
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
                  onSave={this.onSave}
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
