import { searchChanged } from './actions';
import reducer from './reducer';

describe('searchReducer', () => {
  it('should initialize state with people set to an empty string', () => {
    const actualState = reducer(undefined, {});
    expect(actualState).toEqual('');
  });

  it('should replace search with the string in SEARCH_CHANGED action', () => {
    const action = searchChanged('test');
    const actualState = reducer('whatever', action);
    expect(actualState).toEqual(action.search);
  });
});
