import { useState } from "react";
import { Logo } from "../UI/Logo/Logo";
import styles from "./Header.module.css";
import { FavoriteSVG } from "../UI/FavoriteSVG/FavoriteSVG";
import { Modal } from "../Modal/Modal";
import { useAppSelector } from "../../hooks/redux";
import { MoviesFavorite } from "../MoviesFavorite/MoviesFavorite";
import { IMoviesFavorites } from "../../utils/models/moviesFavoritesInterface";
import { Search } from "../Search/Search";

export const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const movies = useAppSelector((state) => state.movies.movies);

  const closeModal = () => {
    setIsShowModal(false);
  };

  const openModal = () => {
    setIsShowModal(true);
  };

  return (
    <header className={styles.headerContain}>
      <Logo />
      <Search />
      <button onClick={openModal}>
        <FavoriteSVG />
      </button>
      {isShowModal && (
        <>
          <Modal close={closeModal}>
            <h2 className={styles.modalTitle}>ИЗБРАННОЕ</h2>
            <ul>
              {movies.map((item) => {
                const movie = item as IMoviesFavorites;
                return (
                  <MoviesFavorite
                    movie={movie}
                    path={`/movies/${movie.id}`}
                    key={movie.id}
                  />
                );
              })}
            </ul>
          </Modal>
        </>
      )}
    </header>
  );
};
