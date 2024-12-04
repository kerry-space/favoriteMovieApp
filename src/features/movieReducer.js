import { createSlice } from '@reduxjs/toolkit';




const movieReducer = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
   
  },
});

export const { addMovie } = movieReducer.actions;
export default movieReducer.reducer;
