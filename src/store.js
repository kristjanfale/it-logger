import { configureStore } from '@reduxjs/toolkit';
import logReducer from './slices/logSlice';
import techsReducer from './slices/techSlice';

// configureStore function already sets redux-thunk up for us automatically
export default configureStore({
  reducer: {
    log: logReducer,
    techs: techsReducer,
  },
});
