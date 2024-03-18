import React, { FC } from "react";
import { IMoviesData, IMoviesMedia } from "../../utils/models/moviesInterface";
import styles from "./MoviesItem.module.css";
import { Link } from "react-router-dom";
interface MoviesItemProps {
  movie: IMoviesData;
  path: string;
}

export const MoviesItem: FC<MoviesItemProps> = ({ movie, path }) => {

  return (
    <Link to={path}>
      <div className={styles.movieContain}>
        <div className={styles.movieBoxImg}>
          <img src={`http://st.kinopoisk.ru/images/film_big/${movie.kinopoisk_id}.jpg`} alt="" />
        </div>
        <p className={styles.movieTitle}>
          {movie.ru_title} / <span>{movie.orig_title}</span>
        </p>
      </div>
    </Link>
  );
};
