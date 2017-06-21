import { peopleRequestedUsing, PEOPLE_REQUESTED, peopleReceived } from './actions';

const testPeople = [{}, {}, {}];
const loadPeopleSuccess = () => Promise.resolve(testPeople);

describe('peopleRequested', () => {
  it('should dispatch PEOPLE_REQUESTED when called', () => {
    const apiFn = loadPeopleSuccess;
    const actionCreator = peopleRequestedUsing(apiFn);
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

  it('should dispatch PEOPLE_RECEIVED when api returns successfully', async () => {
    const apiFn = loadPeopleSuccess;
    const actionCreator = peopleRequestedUsing(apiFn);
    const thunk = actionCreator();
    const dispatch = jest.fn();
    const expectedAction = peopleReceived(testPeople)
    const res = await thunk(dispatch);
    expect(dispatch.mock.calls[1]).toEqual([expectedAction]);
    expect(res).toBe(true);
  });
});