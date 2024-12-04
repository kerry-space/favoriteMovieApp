import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [], // Stores the current search results
    allMovies: [], // Stores all movies fetched cumulatively
    loading: false,
    error: null,
  },
  reducers: {
    startSearch: (state) => {
      state.loading = true;
      state.error = null;
    },
    setResults: (state, action) => {
      state.results = action.payload; // Save the current search results
      state.allMovies = [...state.allMovies, ...action.payload]; // Append new results to allMovies
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { startSearch, setResults, setError } = searchSlice.actions;
export default searchSlice.reducer;
