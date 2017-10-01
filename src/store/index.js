import { createStore } from 'redux';
import rootReducer from './reducer';

const getEnhancer = () => {
  return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const configureStore = () => createStore(
  rootReducer,
  getEnhancer()
);