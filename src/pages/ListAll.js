import React from 'react';
import { compose, withState, withHandlers, withProps } from 'recompose';
import PersonCard from '../components/PersonCard';
import SearchInput from '../components/SearchInput';

// utils

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

// enhance

const withSearch = withState('search', 'setSearch', '');

const withFilteredPeople = withProps(props => ({
  filteredPeople: props.people.filter(filterPerson(props.search))
}));

const withSearchChanged = withHandlers({
  searchChanged: props => event => props.setSearch(event.target.value)
})

const enhance = compose(withSearch, withFilteredPeople, withSearchChanged);

// Component

const ListAll = ({ filteredPeople, search, searchChanged }) => (
  <div className="ListAll">
    <div className="card-container">
      { filteredPeople
        .map(person => 
          <PersonCard person={person} key={person.id} />
        )
      }
    </div>
    <div className="control-container">
      <SearchInput id="search" label="search by name"
        value={search}
        onChange={searchChanged}
      />
    </div>
  </div>
);

export default enhance(ListAll);