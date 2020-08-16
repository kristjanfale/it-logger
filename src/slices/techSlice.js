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
};

const techSlice = createSlice({
  name: 'tech',
  initialState: initialState,
  reducers: {
    // Add new Technician
    addTech(state, action) {
      state.techs.push(action.payload);
    },
    // Delete Technician
    deleteTech(state, action) {
      state.techs = state.techs.filter((tech) => tech.id !== action.payload);
    },
  },
});

// Export "actions creastors" (createSlice automatically generates an "action creator" function with the same name as reducer functions)
export const { addTech, deleteTech } = techSlice.actions;

export default techSlice.reducer;
