import * as discover from './discover/actions';
import { getPersonCount } from './reducer';

export * from './people/actions';
export * from './search/actions';

export function discoverNext() {
  return (dispatch, getState) => {
    dispatch(discover.discoverNext(getPersonCount(getState())));
  };
}

export function discoverPrev() {
  return (dispatch, getState) => {
    dispatch(discover.discoverPrev(getPersonCount(getState())));
  };
}
