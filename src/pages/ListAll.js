import React from 'react';
import PersonCard from '../components/PersonCard';
import SearchInput from '../components/SearchInput';


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

export default ListAll;