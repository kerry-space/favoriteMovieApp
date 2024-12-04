import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';
import MovieCard from './Moviecard';

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="my-4">Favorites</h2>
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

export default FavoritesList;