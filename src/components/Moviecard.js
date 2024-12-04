import React from 'react';

const MovieCard = ({ movie, onAction, actionLabel }) => {
  return (
    <div className="card">
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <button className="btn btn-primary" onClick={onAction}>
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
