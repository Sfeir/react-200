import { PEOPLE_RECEIVED, PERSON_RECEIVED } from './actions';
import { combineReducers } from 'redux';

export const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case PEOPLE_RECEIVED:
      return action.people.reduce((map, person) => ({...map, [person.id]: person}), {});
    case PERSON_RECEIVED:
      return {...state, [action.person.id]: action.person};
    default:
      return state;
  }
};

export const allReducer = (state = [], action) => {
  switch (action.type) {
    case PEOPLE_RECEIVED:
      return action.people.map(person => person.id);
    case PERSON_RECEIVED:
      return state.includes(action.person.id) ? state : [action.person.id, ...state];
    default:
      return state;
  }
};

const reducer = combineReducers({
  map: mapReducer,
  all: allReducer
})

export default reducer;