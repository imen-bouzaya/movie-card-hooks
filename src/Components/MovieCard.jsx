import React from "react";
import StarRating from "./StarRating";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <StarRating rating={movie.rating}/>
      <img src={movie.posterURL} alt={movie.title}/>
      <h3> {movie.title} </h3>
       <p>{movie.date}</p>

    </div>
  );
};

export default MovieCard;