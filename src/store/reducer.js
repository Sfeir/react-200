import { combineReducers } from 'redux';
import peopleReducer from './people/reducer';
import searchReducer from './search/reducer';

export default combineReducers({
  people: peopleReducer,
  search: searchReducer
});
