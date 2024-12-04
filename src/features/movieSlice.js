import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    allMovies: [], // All fetched movies
    results: [], // Search results
  },
  reducers: {
    setAllMovies: (state, action) => {
      state.allMovies = action.payload; // Save all fetched movies
    },
    searchMovies: (state, action) => {
      const query = action.payload.toLowerCase();
      state.results = state.allMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(query)
      );
    },
  },
});

export const { setAllMovies, searchMovies } = movieSlice.actions;
export default movieSlice.reducer;
