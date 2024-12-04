import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../features/movies/favoritesSlice';
 
const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
 
  return (
<div className="col-md-4 mb-4">
<div className="card">
<img src={movie.Poster} className="card-img-top" alt={movie.Title} />
<div className="card-body">
<h5 className="card-title">{movie.Title}</h5>
<button className="btn btn-success" onClick={() => dispatch(addFavorite(movie))}>
            Add to Favorites
</button>
</div>
</div>
</div>
  );
};
 
export default MovieCard;