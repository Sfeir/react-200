import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import AppBar from './components/AppBar';
import Discover from './components/Discover';
import ListAll from './components/ListAll';
import Spinner from './components/Spinner';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null
    };
  }

  componentDidMount() {
    fetch('api/people')
    .then(res => res.json())
    .then(people => this.setState({ people }));
  }
  
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
              <Redirect to="/all" />
            </Switch>
          }
        </main>
      </div>
    );
  }
} 

export default App;
