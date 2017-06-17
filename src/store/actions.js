import * as discover from './discover/actions';

export * from './people/actions';
export * from './search/actions';

export function discoverNext() {
  // return a thunk that dispatches discover.discoverNext(total)
  // with total set to the number of people
}

export function discoverPrev() {
  // return a thunk that dispatches discover.discoverPrev(total)
  // with total set to the number of people
}