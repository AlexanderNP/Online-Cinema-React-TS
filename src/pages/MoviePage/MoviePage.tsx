import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cinemaService } from "../../utils/api/cinemaServise";
import { IMovies } from "../../utils/models/moviesInterface";
import { Movie } from "../../components/Movie/Movie";

interface MoviePageParams {
  id: string;
  [key: string]: string | undefined;
}

export const MoviePage:FC = () => {

  const { id } = useParams<MoviePageParams>();

  const [data, setData] = useState<IMovies | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      const response = await cinemaService.getMovieById(id);
      const data = response.data;
      setData(data);
    }

    fetchMovies();
  }, []);

  
  return (
    <>
      {data && <Movie movie = {data.data[0]}/>}
    </>
  );
};

