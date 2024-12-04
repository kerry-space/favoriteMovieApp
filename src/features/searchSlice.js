import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [], // Ensure this is an empty array initially
    allMovies: [], // Ensure this is an empty array initially
    loading: false,
    error: null,
  },
  reducers: {
    startSearch: (state) => {
      state.loading = true;
      state.error = null;
    },
    setResults: (state, action) => {
      state.results = action.payload; // Update results
      state.loading = false;
    },
    setAllMovies: (state, action) => {
      state.allMovies = action.payload; // Set all movies
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { startSearch, setResults, setAllMovies, setError } = searchSlice.actions;
export default searchSlice.reducer;
