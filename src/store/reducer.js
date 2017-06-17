import { replaceOrPrepend } from '../utils';

const initialState = {
  people: []
};

const merge = replaceOrPrepend((a, b) => a.id === b.id);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PEOPLE_RECEIVED':
      return { people: action.people };
    case 'PERSON_RECEIVED':
      return { people: merge(action.person, state.people) };
    default:
      return state;
  }
};

export default reducer;