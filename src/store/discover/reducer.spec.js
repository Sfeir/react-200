import { discoverNext, discoverPrev } from './actions';
import reducer from './reducer';

describe('discoverReducer', () => {
  it('should initialise with 1', () => {
    const actual = reducer(undefined, {});
    expect(actual).toEqual(1);
  });

  it('should increment on DISCOVER_NEXT', () => {
    const action = discoverNext(3);
    const actual = reducer(1, action);
    expect(actual).toEqual(2);
  });

  it('should reset to 1 on DISCOVER_NEXT when total reached', () => {
    const action = discoverNext(3);
    const actual = reducer(3, action);
    expect(actual).toEqual(1);
  });

  it('should decrement on DISCOVER_PREV', () => {
    const action = discoverPrev(3);
    const actual = reducer(2, action);
    expect(actual).toEqual(1);
  });

  it('should reset to max on DISCOVER_PREV when 1', () => {
    const action = discoverPrev(3);
    const actual = reducer(1, action);
    expect(actual).toEqual(3);
  });
});
