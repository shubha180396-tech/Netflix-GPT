import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponents from "./MainComponents";
import SecondaryComponent from "./SecondaryComponent";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainComponents />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
