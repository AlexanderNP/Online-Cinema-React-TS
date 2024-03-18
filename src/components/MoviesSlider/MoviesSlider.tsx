import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MoviesSlider.css";
import React, { FC, useEffect, useState } from "react";
import { IMovies } from "../../utils/models/moviesInterface";
import { MoviesItem } from "../MoviesItem/MoviesItem";
import { SliderArrow } from "../UI/SliderArrow/SliderArrow";
import { cinemaService } from "../../utils/api/cinemaServise";

export const MoviesSlider: FC = () => {
  const [data, setData] = useState<IMovies | null>(null);
  const [isLoading, setIsLodaing] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await cinemaService.getMovies();
        if (response.status === 200) {
          const data = response.data;
          setData(data);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLodaing(false);
      }
    }
    fetchMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="moviesContain">
        <h2 className="title">ALL MOVIES</h2>
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <SliderArrow direction="left" />,
    nextArrow: <SliderArrow direction="right" />,
  };

  return (
    <div>
      <h2 className="title">TOP 20 Movies</h2>
      {data && (
        <Slider {...settings}>
          {data.data.map((item) => (
            <MoviesItem
              movie={item}
              key={item.id}
              path={`/movies/${item.kinopoisk_id}`}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};
