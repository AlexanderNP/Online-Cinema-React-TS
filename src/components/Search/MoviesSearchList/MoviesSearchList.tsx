import React, { FC, useEffect, useState } from "react";
import { IMoviesData } from "../../../utils/models/moviesInterface";
import { cinemaService } from "../../../utils/api/cinemaServise";
import { MoviesSearchItem } from "../MoviesSearchItem/MoviesSearchItem";
import styles from "./MoviesSearchList.module.css";
import { useDebounce } from "../../../hooks/useDebounce";

interface MoviesSearchListProps {
  search: string;
}

export const MoviesSearchList: FC<MoviesSearchListProps> = ({ search }) => {
  const [data, setData] = useState<IMoviesData[]>([]);
  const [isLoading, setIsLodaing] = useState(true);
  const [error, setError] = useState("");

  const debouncedSearch = useDebounce(fetchMoviesBySearch, 300);

  async function fetchMoviesBySearch() {
    try {
      const response = await cinemaService.getMovieBySearch(search);
      if (response.status === 200) {
        setData(response.data.data);
        setError("");
      }
    } catch (e: any) {
      setError(`Фильмы не найдены!`);
    } finally {
      setIsLodaing(false);
    }
  }

  useEffect(() => {
    debouncedSearch(search);
  }, [search]);

  if (isLoading) {
    return (
      <div className={styles.moviesContain}>
        <span className={styles.loader}></span>
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <ul className={styles.list}>
      {data &&
        data.map((item) => (
          <MoviesSearchItem
            movie={item}
            path={`/movies/${item.kinopoisk_id}`}
            key={item.kinopoisk_id}
          />
        ))}
    </ul>
  );
};
