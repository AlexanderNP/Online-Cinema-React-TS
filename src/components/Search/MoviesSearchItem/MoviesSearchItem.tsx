import { FC } from "react";
import styles from "./MoviesSearchItem.module.css";
import { Link } from "react-router-dom";
import { IMoviesData } from "../../../utils/models/moviesInterface";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { FavoriteSVG } from "../../UI/FavoriteSVG/FavoriteSVG";
import { addCinema } from "../../../store/cinemaFavouritesSlice";
import { moviesExists } from "../../../utils/moviesExists";

interface MoviesSearchItemProps {
  movie: IMoviesData;
  path: string;
}

export const MoviesSearchItem: FC<MoviesSearchItemProps> = ({
  movie,
  path,
}) => {
  const state = useAppSelector((state) => state.movies.movies);

  const dispatch = useAppDispatch();

  return (
    <li className={styles.movieItem}>
      <Link to={path} style={{ width: "100%" }}>
        <div className={styles.movieContain}>
          <div className={styles.movieImgBox}>
            <img
              src={`http://st.kinopoisk.ru/images/film_big/${movie.kinopoisk_id}.jpg`}
              alt={movie.ru_title}
            />
          </div>
          <p className={styles.movieTitle}>{movie.ru_title}</p>
        </div>
      </Link>
      <FavoriteSVG
        style={moviesExists(state, movie.kinopoisk_id) ? `#FF8C00` : undefined}
        onClick={() =>
          dispatch(
            addCinema({
              id: movie.kinopoisk_id,
              title: movie.ru_title,
              imgUrl: `http://st.kinopoisk.ru/images/film_big/${movie.kinopoisk_id}.jpg`,
            })
          )
        }
      />
    </li>
  );
};
