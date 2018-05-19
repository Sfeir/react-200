import { SEARCH_CHANGED } from './actions';

const initialState = '';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHANGED:
      return action.search;
    default:
      return state;
  }
};

export default reducer;

// selectors

export const getTerm = state => state;
