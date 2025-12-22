import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen  bg-gradient-to-b from-black bg-opacity-90">
        <div className="-mt-56  relative z-20 pl-4">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"TopRated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryComponent;
