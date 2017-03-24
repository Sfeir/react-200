import React, { Component } from 'react';
import PEOPLE from '../data/people.json';

import Person from './Person';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: PEOPLE,
      current: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.nextPerson(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextPerson() {
    const { current, people } = this.state;
    const next = (current + 1) % people.length;
    this.setState({
      current: next
    });
  }
  
  render() {
    const { people, current } = this.state;
    return (
      <Person {...people[current]} />
    );
  }
}

export default Discover;