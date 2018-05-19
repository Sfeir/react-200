import { peopleReceived, personReceived } from './actions';
import { freeze } from '../../utils';
import reducer, { mapReducer, allReducer } from './reducer';

const testPeople = freeze([
  { id: '1', firstname: 'John' },
  { id: '2', firstname: 'Jane' },
  { id: '3', firstname: 'Joe' }
]);

describe('peopleReducer', () => {
  it('should init to an object with a map and an all key', () => {
    const actual = reducer(undefined, {});
    expect(actual).toEqual({
      map: {},
      all: []
    });
  });
});

describe('peopleMapReducer', () => {
  const testMap = freeze({
    '1': { id: '1', firstname: 'John' },
    '2': { id: '2', firstname: 'Jane' },
    '3': { id: '3', firstname: 'Joe' }
  });

  it('should build a map of persons with their id as key on PEOPLE_RECEIVED', () => {
    const action = peopleReceived(testPeople);
    const actualState = mapReducer({}, action);
    expect(actualState).toEqual(testMap);
  });

  it('should replace the received person on PERSON_RECEIVED if it already exists', () => {
    const action = personReceived({ id: '2', firstname: 'Jill' });
    const actualState = mapReducer(testMap, action);
    expect(actualState).toEqual({ ...testMap, '2': action.person });
  });

  it('should add the received person on PERSON_RECEIVED when it does not exist', () => {
    const action = personReceived({ id: '4', firstname: 'Jill' });
    const actualState = mapReducer(testMap, action);
    expect(actualState).toEqual({ ...testMap, '4': action.person });
  });
});

describe('peopleAllReducer', () => {
  const testAll = freeze(['1', '2', '3']);

  it('should build the array of ids on PEOPLE_RECEIVED', () => {
    const action = peopleReceived(testPeople);
    const actualState = allReducer([], action);
    expect(actualState).toEqual(testAll);
  });

  it('should do nothing on PERSON_RECEIVED if it already exists', () => {
    const action = personReceived({ id: '2', firstname: 'Jill' });
    const actualState = allReducer(testAll, action);
    expect(actualState).toBe(testAll);
  });

  it('should prepend the received person id on PERSON_RECEIVED when it does not exist', () => {
    const action = personReceived({ id: '4', firstname: 'Jill' });
    const actualState = allReducer(testAll, action);
    expect(actualState).toEqual(['4', ...testAll]);
  });
});
