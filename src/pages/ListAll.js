import React, { Component, Fragment } from 'react';
import Person from '../components/Person';
import SearchInput from '../components/SearchInput';

// utils

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

// state management

const searchChanged = value => () => ({
  search: value || ''
});

// Component

class ListAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  searchChanged = event => {
    this.setState(searchChanged(event.target.value));
  }
  
  render() {
    const { people } = this.props;
    const { search } = this.state;
    return (
      <Fragment>
        <div className="card-container">
          { people
            .filter(filterPerson(search))
            .map(person => 
              <Person person={person} key={person.id} />
            )
          }
        </div>
        <div className="control-container">
          <SearchInput id="search" label="search by name"
            value={search}
            onChange={this.searchChanged}
          />
        </div>
      </Fragment>
    );
  }
}

export default ListAll;