import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllMovies } from './utils/api';
import { setAllMovies } from './features/searchSlice';
import SearchMovies from './components/SearchMovies';
import FavoritesList from './components/FavoritesList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchAllMovies(); // Fetch all movies
      dispatch(setAllMovies(movies)); // Save fetched movies in Redux store
    };
    loadMovies();
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="my-4 text-center">Movie App</h1>
      <div className="row">
        <div className="col-md-6">
          <SearchMovies />
        </div>
        <div className="col-md-6">
          <FavoritesList />
        </div>
      </div>
    </div>
  );
}

export default App;
