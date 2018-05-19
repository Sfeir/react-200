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

export const getPersonById = (state, id) =>
  people.getPersonById(state.people, id);
export const getPersonCount = state => people.getPersonCount(state.people);
export const getSearch = state => search.getTerm(state.search);
export const getFilteredPersonIds = state =>
  people.getFilteredPersonIds(state.people, getSearch(state));
export const getCurrentDiscoverId = state =>
  people.getPersonIdByIndex(
    state.people,
    discover.getCurrentIndex(state.discover)
  );
