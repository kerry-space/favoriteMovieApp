import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../features/favoriteSlice';
import MovieCard from './Moviecard';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="container my-4">
      <h2>My Favorites</h2>
      <div className="row">
        {favorites.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.imdbID}>
            <MovieCard
              movie={movie}
              onAction={() => dispatch(removeFavorite(movie.imdbID))}
              actionLabel="Remove"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;