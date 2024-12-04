import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/movieSlice';
import favoritesReducer from '../features/movies/favoritesSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    favorites: favoritesReducer,
  },
});
