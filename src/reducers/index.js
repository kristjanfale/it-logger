import { combineReducers } from 'redux';

import logReducer from './logReducer';

// Combine all reducers
export default combineReducers({
  logReducer,
});
