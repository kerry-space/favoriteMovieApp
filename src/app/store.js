// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favoriteSlice';
import searchReducer from '../features/searchSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    search: searchReducer, // Add search slice here
  },
});
