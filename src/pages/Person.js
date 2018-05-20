import React, { Component } from 'react';
import PersonCard from '../components/Person';

class Person extends Component {
  render() {
    const { person } = this.props;
    return (
      <div className="card-container">
        {person ? <PersonCard person={person} /> : 'not found :('}
      </div>
    );
  }
}

export default Person;
