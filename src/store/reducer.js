import { combineReducers } from 'redux';
import peopleReducer, * as people from './people/reducer';
import searchReducer from './search/reducer';
import discoverReducer from './discover/reducer';

export default combineReducers({
  people: peopleReducer,
  search: searchReducer,
  discover: discoverReducer
});

// selectors

export const getPersonById = (state, id) => people.getPersonById(state.people, id);