import React, { Component } from 'react';
import PEOPLE from '../data/people.json';

import Person from './Person';

function cyclePerson({ current, people }) {
  return {
    current: (current + 1) % people.length
  };
}

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: PEOPLE,
      current: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState(cyclePerson), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    const { people, current } = this.state;
    return (
      <Person {...people[current]} />
    );
  }
}

export { cyclePerson };
export default Discover;