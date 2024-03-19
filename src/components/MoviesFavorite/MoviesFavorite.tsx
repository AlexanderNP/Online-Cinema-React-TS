import styles from "./MoviesFavorite.module.css";
import { IMoviesFavorites } from "../../utils/models/moviesFavoritesInterface";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { removeCinema } from "../../store/cinemaFavouritesSlice";

interface MoviesFavoriteProps {
  movie: IMoviesFavorites;
  path: string;
}

export const MoviesFavorite = ({ movie, path }: MoviesFavoriteProps) => {
  const dispatch = useAppDispatch();

  return (
    <li className={styles.movieItem}>
      <div
        className={styles.movieSvgBox}
        onClick={() => dispatch(removeCinema({
          id: movie.id,
          title: "",
          imgUrl: ""
        }))}
      >
        <img src="./deleteFavorite.svg" alt="" />
      </div>
      <Link to={path}>
        <div className={styles.movieModalContain}>
          <div className={styles.movieImgBox}>
            <img src={movie.imgUrl} alt="movie" />
          </div>
          <p>{movie.title}</p>
        </div>
      </Link>
    </li>
  );
};
