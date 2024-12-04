import { createSlice } from '@reduxjs/toolkit';




const movieReducer = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = movieReducer.actions;
export default movieReducer.reducer;
