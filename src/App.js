import React, { Component } from 'react';
import './App.css';

import AppBar from './components/AppBar';
import Discover from './components/Discover';
import ListAll from './components/ListAll';
import Spinner from './components/Spinner';

const DISCOVER = 'discover';
const LISTALL = 'show all';

const other = shown => shown === DISCOVER ? LISTALL : DISCOVER;
const toggleShown = ({ shown }) => ({ shown: other(shown) });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: LISTALL,
      people: null
    };
  }

  componentDidMount() {
    fetch('api/people')
    .then(res => res.json())
    .then(people => this.setState({ people }));
  }

  toggleShown = () => this.setState(toggleShown);
  
  render() {
    const { shown, people } = this.state;
    return (
      <div className="App">
        <header>
          <AppBar show={other(shown)} toggleShow={this.toggleShown}/>
        </header>
        <main>
          { people === null
          ? <Spinner />
          : shown === LISTALL
          ? <ListAll people={people} />
          : <Discover people={people} />
          }
        </main>
      </div>
    );
  }
} 

export default App;
