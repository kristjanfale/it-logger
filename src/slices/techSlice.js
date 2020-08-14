import { createSlice, createStore } from '@reduxjs/toolkit';

const initialState = {
  techs: [],
  //   loading: false,
  //   error: null,
};

const techsSlice = createSlice({
  name: 'techs',
  initialState: initialState,
  reducers: {},
});

export default techsSlice.reducer;
