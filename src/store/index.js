import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { fetchPeople, updatePerson } from '../service/people';
import rootReducer from './reducer';
import { peopleRequestedUsing, personUpdatedUsing } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  let initialState = localStorage.getItem('state') || undefined;
  if (initialState !== undefined) {
    initialState = JSON.parse(initialState);
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    const state = store.getState();
    const { people, ...persist } = state;
    localStorage.setItem('state', JSON.stringify(persist));
  });

  return store;
};

export const peopleRequested = peopleRequestedUsing(fetchPeople);
export const personUpdated = personUpdatedUsing(updatePerson);
export { searchChanged, discoverNext, discoverPrev } from './actions';

export {
  getPersonById,
  getPersonCount,
  getSearch,
  getFilteredPersonIds,
  getCurrentDiscoverId
} from './reducer';
