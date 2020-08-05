import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// Get logs
export const getLogs = () => {
  // Thunk allows us to return a function, not an object (used for async)
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch('http://localhost:5000/logs');
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
