import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllMovies } from './utils/api';
import { setAllMovies } from './features/searchSlice';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchMovies from './components/SearchMovies';
import FavoritesPage from './components/FavoritesPage';
import Navbar from './components/Navbar';

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
    <Router>
      <div className="container">
        <Navbar />
        <h1 className="my-4 text-center">Patrik & Kerry</h1>
        <Routes>
          <Route path="/" element={<SearchMovies />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;