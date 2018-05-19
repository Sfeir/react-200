import * as discover from './discover/actions';
import { discoverNext, discoverPrev } from './actions';

const getState = () => ({
  people: {
    all: [1, 2, 3]
  }
});

describe('discoverNext', () => {
  it('should return a thunk', () => {
    expect(typeof discoverNext()).toEqual('function');
  });

  it('should dispatch discover.discoverNext with total set', () => {
    const dispatch = jest.fn();
    const expected = discover.discoverNext(3);
    discoverNext()(dispatch, getState);
    expect(dispatch).toBeCalledWith(expected);
  });
});

describe('discoverPrev', () => {
  it('should return a thunk', () => {
    expect(typeof discoverPrev()).toEqual('function');
  });

  it('should dispatch discover.discoverPrev with total set', () => {
    const dispatch = jest.fn();
    const expected = discover.discoverPrev(3);
    discoverPrev()(dispatch, getState);
    expect(dispatch).toBeCalledWith(expected);
  });
});
