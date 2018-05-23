import React, { Component, Fragment } from 'react';
import PersonCard from '../components/PersonCard';
import SearchInput from '../components/SearchInput';

// utils

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

// state management

class InputState extends Component {
  state = { value: '' };

  valueChanged = changeEvent =>
    this.setState({ value: changeEvent.target.value });

  render() {
    return this.props.children(this.state.value, this.valueChanged);
  }
}

// Component

const ListAll = ({ people }) => (
  <InputState>
    {(search, searchChanged) => (
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
            onChange={searchChanged}
          />
        </div>
      </Fragment>
    )}
  </InputState>
);

export default ListAll;
