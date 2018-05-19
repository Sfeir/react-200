import React, { Fragment } from 'react';
import PersonCard from '../components/PersonCard';
import SearchInput from '../components/SearchInput';

const ListAll = ({ personIds, search, searchChanged }) => (
  <Fragment>
    <div className="card-container">
      {personIds.map(personId => <PersonCard id={personId} key={personId} />)}
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

export default ListAll;
