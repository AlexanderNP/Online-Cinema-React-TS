import React, { FC } from "react";
import { IMoviesData } from "../../utils/models/moviesInterface";
import styles from "./Movie.module.css";
import { useAppDispatch } from "../../hooks/redux";
import { addCinema } from "../../store/cinemaFavouritesSlice";
import { FavoriteSVG } from "../UI/FavoriteSVG/FavoriteSVG";
import { useAppSelector } from "../../hooks/redux";
import { moviesExists } from "../../utils/moviesExists";
import { Link } from "react-router-dom";

interface MovieProps {
  movie: IMoviesData;
}

export const Movie: FC<MovieProps> = ({ movie }) => {
  const state = useAppSelector((state) => state.movies.movies);

  const dispatch = useAppDispatch();

  const stylesBackgroundWrap = {
    background: `url("http://st.kinopoisk.ru/images/film_big/${movie.kinopoisk_id}.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };

  return (
    <section className={styles.section}>
      <div className={styles.movieBackground}></div>
      <div
        className={styles.movieBackgroundImg}
        style={stylesBackgroundWrap}
      ></div>
      <div className={styles.moon}></div>
      <div className={styles.btnHomeContain}>
        <div className={styles.btnHome}>
          <Link to={"/"} className={styles.linkHome}>
            На главную
          </Link>
        </div>
      </div>
      <div className={styles.movieContainer}>
        <div className={styles.movieWrap}>
          <FavoriteSVG
            style={
              moviesExists(state, movie.kinopoisk_id) ? `#FF8C00` : undefined
            }
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
          <div className={styles.description}>
            <h2>
              {movie.ru_title} / {movie.orig_title}
            </h2>
            <p>О фильме:</p>
            <p>
              Страна: <span>Россия</span>
            </p>
            <p>
              Жанр: <span>Комедия</span>
            </p>
            <p>
              Год производства: <span>{movie.year}</span>
            </p>
            <p>
              Описание:
              <span>
                Далеко-далеко, за словесными горами в стране гласных и согласных
                живут рыбные тексты. По всей родного сбить курсивных. Страна
                страну, парадигматическая, все несколько, всеми сбить дал своих
                что составитель языком меня снова но там.
              </span>
            </p>
          </div>
          <iframe
            src={movie.iframe_src}
            width={720}
            height={460}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
