import { freeze } from '../utils';
import reducer from './reducer';

describe('reducer', () => {
  const testPeople = freeze([
    { id: '1', firstname: 'John' },
    { id: '2', firstname: 'Jane' },
    { id: '3', firstname: 'Joe' }
  ]);

  const emptyState = freeze({
    people: []
  });

  const populatedState = freeze({
    people: testPeople
  });

  it('should initialize state with people set to an empty array', () => {
    const actualState = reducer(undefined, {});
    expect(actualState).toEqual(emptyState);
  });

  it('should set people array on PEOPLE_RECEIVED', () => {
    const action = {
      type: 'PEOPLE_RECEIVED',
      people: testPeople
    };

    const actualState = reducer(emptyState, action);
    expect(actualState).toEqual(populatedState);
  });

  it('should replace the received person on PERSON_RECEIVED if it already exists', () => {
    const action = {
      type: 'PERSON_RECEIVED',
      person: { id: '2', firstname: 'Jill' }
    };

    const actualState = reducer(populatedState, action);

    const {
      people: [first, , third]
    } = populatedState;
    expect(actualState).toEqual({
      people: [first, action.person, third]
    });
  });

  it('should prepend the received person on PERSON_RECEIVED when it does not exist', () => {
    const action = {
      type: 'PERSON_RECEIVED',
      person: { id: '4', firstname: 'Jill' }
    };

    const actualState = reducer(populatedState, action);
    expect(actualState).toEqual({
      people: [action.person].concat(testPeople)
    });
  });
});
