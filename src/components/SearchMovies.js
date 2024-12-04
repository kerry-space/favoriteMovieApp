import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch, setResults, setError } from '../redux/searchSlice';
import { addFavorite } from '../redux/favoritesSlice';
import { searchMovies } from '../utils/api';
import MovieCard from './Moviecard';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector((state) => state.search);

  const handleSearch = async () => {
    if (!query.trim()) return;
    dispatch(startSearch());
    try {
      const movies = await searchMovies(query);
      dispatch(setResults(movies));
    } catch (err) {
      dispatch(setError('Failed to fetch movies.'));
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p>{error}</p>}
      <div className="movie-grid">
        {results.map((movie) => (
          <MovieCard 
            key={movie.imdbID} 
            movie={movie} 
            onAction={() => dispatch(addFavorite(movie))} 
            actionLabel="Add to Favorites" 
          />
        ))}
      </div>
    </div>
  );
};

// Export the SearchMovies component as the default export
export default SearchMovies;