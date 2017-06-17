import * as discover from './discover/actions';

export * from './people/actions';
export * from './search/actions';

export function discoverNext() {
  return (dispatch, getState) => {
    dispatch(discover.discoverNext(getState().people.length));
  };
}

export function discoverPrev() {
  return (dispatch, getState) => {
    dispatch(discover.discoverPrev(getState().people.length));
  };
}