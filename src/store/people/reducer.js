import { PEOPLE_RECEIVED, PERSON_RECEIVED } from './actions';
import { replaceOrPrepend } from '../../utils';

const initialState = [];

const merge = replaceOrPrepend((a, b) => a.id === b.id);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_RECEIVED:
      return action.people;
    case PERSON_RECEIVED:
      return merge(action.person, state);
    default:
      return state;
  }
};

export default reducer;