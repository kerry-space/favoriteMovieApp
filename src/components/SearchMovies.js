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
    <div className="container">
      <h2 className="my-4">Search Movies</h2>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a movie..."
        />
        <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {results.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.imdbID}>
            <MovieCard 
              movie={movie} 
              onAction={() => dispatch(addFavorite(movie))} 
              actionLabel="Add to Favorites" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;