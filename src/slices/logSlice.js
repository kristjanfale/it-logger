import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

// createSlice function takes care of the work of generating action type strings, action creator functions, and action objects

// createSlice automatically generates action creators with the same names as the reducer functions we wrote
//
// console.log(logSlice.actions.setLoading()) -> {type: "log/setLoading"}

// It also generates the slice reducer function that knows how to respond to all these action type
//
// const newState = logSlice.reducer({ loading: false }, logSlice.actions.setLoading())
// console.log(newState) -> {loading: true}

export const logSlice = createSlice({
  name: 'log',
  initialState: initialState,
  reducers: {
    getLogs: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.logs = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    logsError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getLogs, setLoading, logsError } = logSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// the outside "thunk creator" function
export const fetchLogs = () => {
  // the inside "thunk function"
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading);
      // make an async call in the thunk
      const res = await fetch('http://localhost:5000/logs');
      const data = await res.json();
      // dispatch an action when we get the response back
      dispatch(getLogs(data));
    } catch (err) {
      // If something went wrong, handle it here
      dispatch(logsError(err.response.data));
    }
  };
};

export default logSlice.reducer;
