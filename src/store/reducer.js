import { replaceOrPrependById } from '../utils';

const initialState = {
  people: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PEOPLE_RECEIVED':
      return { people: action.people };
    case 'PERSON_RECEIVED':
      return { people: replaceOrPrependById(action.person, state.people) };
    default:
      return state;
  }
};

export default reducer;