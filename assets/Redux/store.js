import {createStore, combineReducers} from 'redux';

import stationReducer from './Book/BookReducer';

const rootReducer = combineReducers({
  stationReducer: stationReducer,
});

const store = createStore(rootReducer);

export default store;
