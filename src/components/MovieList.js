import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  //   const mainMovie = movies[0];
  //   console.log(movies[0]);
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide ">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}
          {/* <MovieCards /> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
