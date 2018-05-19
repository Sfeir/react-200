import { succ, pred } from '../../utils';
import { DISCOVER_NEXT, DISCOVER_PREV } from './actions';

const initialState = 1;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOVER_NEXT:
      return succ(state, 1, action.total);
    case DISCOVER_PREV:
      return pred(state, 1, action.total);
    default:
      return state;
  }
};

export default reducer;

// selectors

export const getCurrentIndex = state => state - 1;
