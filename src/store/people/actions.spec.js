import {
  peopleRequestedUsing,
  PEOPLE_REQUESTED,
  peopleReceived,
  personUpdatedUsing,
  PERSON_UPDATED,
  personReceived
} from './actions';

const testPeople = [{}, {}, {}];
const testPerson = { id: '123' };
const loadPeopleSuccess = () => Promise.resolve(testPeople);
const updatePersonSuccess = () => Promise.resolve(testPerson);
const failingApiFn = () => Promise.reject('testError');

describe('peopleRequested', () => {
  it('should dispatch PEOPLE_REQUESTED when called', () => {
    const actionCreator = peopleRequestedUsing(loadPeopleSuccess);
    const thunk = actionCreator();
    const dispatch = jest.fn();
    thunk(dispatch);
    expect(dispatch).toBeCalledWith({ type: PEOPLE_REQUESTED });
  });

  it('should call the api function', () => {
    const apiFn = jest.fn(loadPeopleSuccess);
    const actionCreator = peopleRequestedUsing(apiFn);
    const thunk = actionCreator();
    const dispatch = () => {};
    thunk(dispatch);
    expect(apiFn).toHaveBeenCalled();
  });

  it('should dispatch PEOPLE_RECEIVED when api returns successfully and resolve to true', async () => {
    const actionCreator = peopleRequestedUsing(loadPeopleSuccess);
    const thunk = actionCreator();
    const dispatch = jest.fn();
    const expectedAction = peopleReceived(testPeople);
    const res = await thunk(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(expectedAction);
    expect(res).toBe(true);
  });

  it('should resolve to false when api promise is rejected', async () => {
    const actionCreator = peopleRequestedUsing(failingApiFn);
    const thunk = actionCreator();
    const dispatch = () => {};
    const res = await thunk(dispatch);
    expect(res).toBe(false);
  });
});

describe('personUpdated', () => {
  it('should dispatch PERSON_UPDATED when called', () => {
    const actionCreator = personUpdatedUsing(updatePersonSuccess);
    const thunk = actionCreator(testPerson.id, testPerson);
    const dispatch = jest.fn();
    thunk(dispatch);
    expect(dispatch).toBeCalledWith({ type: PERSON_UPDATED });
  });

  it('should call the api function with correct params', () => {
    const apiFn = jest.fn(updatePersonSuccess);
    const actionCreator = personUpdatedUsing(apiFn);
    const thunk = actionCreator(testPerson.id, testPerson);
    const dispatch = () => {};
    thunk(dispatch);
    expect(apiFn).toHaveBeenCalledWith(testPerson.id, testPerson);
  });

  it('should dispatch PERSON_RECEIVED when api returns successfully and resolve to true', async () => {
    const actionCreator = personUpdatedUsing(updatePersonSuccess);
    const thunk = actionCreator(testPerson.id, testPerson);
    const dispatch = jest.fn();
    const expectedAction = personReceived(testPerson);
    const res = await thunk(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(expectedAction);
    expect(res).toBe(true);
  });

  it('should resolve to false when api promise is rejected', async () => {
    const actionCreator = personUpdatedUsing(failingApiFn);
    const thunk = actionCreator();
    const dispatch = () => {};
    const res = await thunk(dispatch);
    expect(res).toBe(false);
  });
});
