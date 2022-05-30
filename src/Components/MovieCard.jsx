import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
const MovieCard = ({ movie }) => {
  return (
    <Link   to={`/Details/${movie.id}`} style={{textDecoration:'none'}}>
    <div className="movie-card">
      <StarRating rating={movie.rating}/>
      <img src={movie.posterURL} alt={movie.title}/>
      <h3> {movie.title} </h3>
       <p>{movie.date}</p>
    </div>
    </Link>
  );
};

export default MovieCard;