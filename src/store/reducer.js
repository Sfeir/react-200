import { combineReducers } from 'redux';
import peopleReducer from './people/reducer';
import searchReducer from './search/reducer';
import discoverReducer from './discover/reducer';

export default combineReducers({
  people: peopleReducer,
  search: searchReducer,
  discover: discoverReducer
});
