import React, { FC } from "react";
import { Header } from "../../components/Header/Header";
import { MoviesSlider } from "../../components/MoviesSlider/MoviesSlider";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export const Home: FC = () => {
  return (
    <>
      <Header />
      <MoviesSlider />
      <MoviesList />
    </>
  );
};
