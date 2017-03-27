import React, { Component } from 'react';
import PersonCard from '../components/PersonCard';

class Person extends Component {
  
  onEdit = () => console.info('edit has been clicked');
  
  render() {
    const { person } = this.props;
    return (
      <div className="card-container">
        { person
        ? <PersonCard {...person} onEdit={this.onEdit} />
        : "not found :("
        }
      </div>
    );
  }
}

export default Person;