import { PEOPLE_RECEIVED, PERSON_RECEIVED } from './actions';
import { combineReducers } from 'redux';

export const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case PEOPLE_RECEIVED:
      return action.people.reduce(
        (map, person) => ({ ...map, [person.id]: person }),
        {}
      );
    case PERSON_RECEIVED:
      return { ...state, [action.person.id]: action.person };
    default:
      return state;
  }
};

export const allReducer = (state = [], action) => {
  switch (action.type) {
    case PEOPLE_RECEIVED:
      return action.people.map(person => person.id);
    case PERSON_RECEIVED:
      return state.includes(action.person.id)
        ? state
        : [action.person.id, ...state];
    default:
      return state;
  }
};

const reducer = combineReducers({
  map: mapReducer,
  all: allReducer
});

export default reducer;

// utils

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

// selectors

export const getPersonById = (state, id) => state.map[id];
export const getPersonCount = state => state.all.length;
export const getPersonIdByIndex = (state, idx) => state.all[idx];
export const getFilteredPersonIds = (state, filter) =>
  state.all
    .map(id => state.map[id])
    .filter(filterPerson(filter))
    .map(p => p.id);
