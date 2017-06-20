import * as discover from './discover/actions';
import { getAllPersonIds } from './reducer';

export * from './people/actions';
export * from './search/actions';

export function discoverNext() {
  return (dispatch, getState) => {
    dispatch(discover.discoverNext(getAllPersonIds(getState()).length));
  };
}

export function discoverPrev() {
  return (dispatch, getState) => {
    dispatch(discover.discoverPrev(getAllPersonIds(getState()).length));
  };
}