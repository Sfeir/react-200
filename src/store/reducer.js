import { replaceOrPrepend } from '../utils';

const initialState = {
  people: [],
  search: ''
};

const merge = replaceOrPrepend((a, b) => a.id === b.id);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PEOPLE_RECEIVED':
      return { ...state, people: action.people };
    case 'PERSON_RECEIVED':
      return { ...state, people: merge(action.person, state.people) };
    case 'SEARCH_CHANGED':
      return { ...state, search: action.search };
    default:
      return state;
  }
};

export default reducer;