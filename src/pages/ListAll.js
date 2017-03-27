import React, { Component } from 'react';
import Person from '../components/Person';
import SearchInput from '../components/SearchInput';

// utils

const filterPerson = search => person => {
  if (!search) {
    return true;
  } else {
    const re = new RegExp(search, 'i');
    return re.test(person.firstname) || re.test(person.lastname);
  }
};

// state management

const searchChanged = value => ({ search }) => ({
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
      <div className="ListAll">
        <div className="card-container">
          { people
            .filter(filterPerson(search))
            .map(person => 
              <Person {...person} key={person.id} />
            )
          }
        </div>
        <div className="control-container">
          <SearchInput id="search" label="search by name"
            value={search}
            onChange={this.searchChanged}
          />
        </div>
      </div>
    );
  }
}

export default ListAll;