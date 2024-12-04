import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';
import MovieCard from './Moviecard';

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Favorites</h2>
      <div className="movie-grid">
        {favorites.map((movie) => (
          // Render a MovieCard component for each movie in the favorites list
          <MovieCard 
            key={movie.imdbID} // Unique key for each movie card
            movie={movie} // Pass the movie object as a prop to MovieCard
            onAction={() => dispatch(removeFavorite(movie.imdbID))} // Dispatch an action to remove the movie from favorites when the action is triggered
            actionLabel="Remove" // Label for the action button
          />
        ))}
      </div>
    </div>
  );
};

// Export the FavoritesList component as the default export
export default FavoritesList;