import { useEffect, useState } from "react";
import { cinemaService } from "../../utils/api/cinemaServise";
import { MoviesItem } from "../MoviesItem/MoviesItem";
import List from "../List/List";
import { IMoviesData } from "../../utils/models/moviesInterface";
import styles from "./MoviesList.module.css";;

export const MoviesList = () => {
  const [data, setData] = useState<IMoviesData[]>([]);
  const [isLoading, setIsLodaing] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(2);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      if (fetching) {
        try {
          const response = await cinemaService.getMovieAll(page);
          if (response.status === 200) {
            setData([...data, ...response.data.data]);
            setPage((prevState) => prevState + 1);
            setTotalCount(response.data.last_page);
          }
        } catch (e: any) {
          setError(`${e.name}: ${e.message}`);
        } finally {
          setFetching(false);
          setIsLodaing(false);
        }
      }
    }
    fetchMovies();
  }, [data, fetching, page]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [totalCount]);

  const scrollHandler = (): void => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
        100 &&
      data.length < totalCount
    ) {
      setFetching(true);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.moviesContain}>
        <h2 className={styles.title}>ALL MOVIES</h2>
        <span className={styles.loader}></span>
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.moviesContain}>
      <h2 className={styles.title}>ALL MOVIES</h2>
      <div className={styles.moviesList}>
        {data && (
          <List
            items={data}
            styles={styles.moviesList}
            renderItem={(data: IMoviesData) => (
              <MoviesItem
                movie={data}
                path={`/movies/${data.kinopoisk_id}`}
                key={data.id}
              />
            )}
          />
        )}
      </div>
    </div>
  );
};
