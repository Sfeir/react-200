import React, { Fragment } from 'react';
import { compose, withStateHandlers, withProps } from 'recompose';
import PersonCard from '../components/PersonCard';
import SearchInput from '../components/SearchInput';

// utils

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

// enhance

const withSearchState = withStateHandlers(
  { search: '' },
  { searchChanged: () => event => ({ search: event.target.value }) }
);

const withFilteredPeople = withProps(props => ({
  filteredPeople: props.people.filter(filterPerson(props.search))
}));

const enhance = compose(withSearchState, withFilteredPeople);

// Component

const ListAll = ({ filteredPeople, search, searchChanged }) => (
  <Fragment>
    <div className="card-container">
      {filteredPeople.map(person => (
        <PersonCard person={person} key={person.id} />
      ))}
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
);

export default enhance(ListAll);
