import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.some(movie => movie.imdbID === action.payload.imdbID);
      if (!exists) state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter(movie => movie.imdbID !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
