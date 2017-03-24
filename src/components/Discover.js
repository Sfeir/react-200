import React, { Component } from 'react';
import './Discover.css';
import PEOPLE from '../data/people.json';

import Person from './Person';

function nextPerson({ current, people }) {
  return {
    current: (current + 1) % people.length
  };
}

const Fab = ({ kind, large }) => (
  <a className={`btn-default btn-floating waves-effect waves-light ${large && 'btn-large'}`}>
    <i className="material-icons">{kind}</i>
  </a>
);

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: PEOPLE,
      current: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState(nextPerson), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    const { people, current } = this.state;
    return (
      <div className="Discover">
        <div className="card-container">
          <Person {...people[current]} />
        </div>
        <div className="fab-container">
        {/*
          <Fab kind="skip_previous" />
          <Fab kind={this.interval ? 'pause' : 'play_arrow'} large />
        */}
          <Fab kind="skip_next" large />
        </div>
      </div>
    );
  }
}

export default Discover;