import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from '../features/searchSlice';
import { addFavorite } from '../features/favoriteSlice';
import MovieCard from './Moviecard';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { results = [], allMovies = [] } = useSelector((state) => state.search); // Fallback to empty arrays

  const handleSearch = () => {
    if (!query.trim()) {
      dispatch(setResults(allMovies)); // Show all movies if query is empty
      return;
    }
    const filteredMovies = allMovies.filter((movie) =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setResults(filteredMovies)); // Update results with filtered movies
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Search Movies</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="row">
        {(results.length ? results : allMovies).map((movie) => (
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
