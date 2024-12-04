import React from 'react';

const MovieCard = ({ movie, onAction, actionLabel }) => (
  <div className="movie-card">
    <img src={movie.Poster} alt={movie.Title} />
    <div className="movie-info">
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={onAction}>{actionLabel}</button>
    </div>
  </div>
);

export default MovieCard;
