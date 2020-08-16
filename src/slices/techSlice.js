import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  techs: [
    {
      id: 1,
      name: 'Bobo Smrade',
    },
    {
      id: 2,
      name: 'Gandalf the White',
    },
    {
      id: 3,
      name: 'Darth Vader',
    },
    {
      id: 4,
      name: 'Willy Wonka',
    },
  ],
  loading: false,
  error: null,
};

const techSlice = createSlice({
  name: 'techs',
  initialState: initialState,
  reducers: {
    addTech(state, action) {
      state.techs.push(action.payload);
    },
  },
});

// Export "actions creastors" (createSlice automatically generates an "action creator" function with the same name as reducer functions)
export const { addTech } = techSlice.actions;

export default techSlice.reducer;
