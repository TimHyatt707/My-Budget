import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

// import env from '../env';

export default function setupStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
