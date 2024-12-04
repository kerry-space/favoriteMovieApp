import React from 'react';
import SearchMovies from './components/SearchMovies';
import FavoritesList from './components/FavoritesList';

function App() {
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
