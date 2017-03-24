import React, { Component } from 'react';
import './App.css';

import AppBar from './components/AppBar';
import Discover from './components/Discover';
import ListAll from './components/ListAll';

const DISCOVER = 'discover';
const LISTALL = 'show all';

const other = shown => shown === DISCOVER ? LISTALL : DISCOVER;
const toggleShown = ({ shown }) => ({ shown: other(shown) });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: DISCOVER
    };
  }

  toggleShown = () => this.setState(toggleShown);
  
  render() {
    const { shown } = this.state;
    return (
      <div className="App">
        <header>
          <AppBar show={other(shown)} toggleShow={this.toggleShown}/>
        </header>
        <main>
          { shown === LISTALL
          ? <ListAll />
          : <Discover />
          }
        </main>
      </div>
    );
  }
} 

export default App;
