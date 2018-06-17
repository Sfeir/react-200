import { replaceOrPrependById } from '../utils';

const initialState = {
  people: [],
  search: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PEOPLE_RECEIVED':
      return { ...state, people: action.people };
    case 'PERSON_RECEIVED':
      return {
        ...state,
        people: replaceOrPrependById(action.person, state.people)
      };
    case 'SEARCH_CHANGED':
      return { ...state, search: action.search };
    default:
      return state;
  }
};

export default reducer;
