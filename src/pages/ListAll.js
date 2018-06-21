import React, { Component, Fragment } from 'react';
import PersonCard from '../components/PersonCard';
import SearchInput from '../components/SearchInput';

// utils

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

// Component

const ListAll = ({ people, search, onSearchChange }) => (
  <Fragment>
    <div className="card-container">
      {people
        .filter(filterPerson(search))
        .map(person => <PersonCard person={person} key={person.id} />)}
    </div>
    <div className="control-container">
      <SearchInput
        id="search"
        label="search by name"
        value={search}
        onChange={onSearchChange}
      />
    </div>
  </Fragment>
);

const setValue = value => () => ({ value });

class ListAllContainer extends Component {
  state = { value: '' };
  valueChanged = event => this.setState(setValue(event.target.value));
  render() {
    return (
      <ListAll
        people={this.props.people}
        search={this.state.value}
        onSearchChange={this.valueChanged}
      />
    );
  }
}

export default ListAllContainer;
