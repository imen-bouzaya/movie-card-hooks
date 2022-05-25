import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list" >
      {movies.map((movie) => (
     <div key={movie.id}>   <MovieCard movie={movie} /></div>
      ))}
    </div>
  );
};

export default MovieList;