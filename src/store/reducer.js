import { combineReducers } from 'redux';
import peopleReducer, * as people from './people/reducer';
import searchReducer, * as search from './search/reducer';
import discoverReducer, * as discover from './discover/reducer';

export default combineReducers({
  people: peopleReducer,
  search: searchReducer,
  discover: discoverReducer
});

// selectors

export const getPersonById = (state, id) => people.getPersonById(state.people, id);
export const getAllPersonIds = (state) => people.getAllPersonIds(state.people);
export const getSearch = (state) => search.getTerm(state.search);
export const getCurrentDiscoverId = (state) => people.getAllPersonIds(state.people)[discover.getCurrentIndex(state.discover)];
