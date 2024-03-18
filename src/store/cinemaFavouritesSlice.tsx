import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMoviesFavorites } from "../utils/models/moviesFavoritesInterface";
import { moviesExists } from "../utils/moviesExists";

export interface MoviesState {
  movies: IMoviesFavorites[];
}

const initialState: MoviesState = {
  movies: [],
};

export const cinemaFavouritesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addCinema: (state, action: PayloadAction<IMoviesFavorites>) => {
      if (!moviesExists(state.movies, action.payload.id)) {
        state.movies.push({
          id: action.payload.id,
          title: action.payload.title,
          imgUrl: action.payload.imgUrl,
        });
      }
    },
    removeCinema: (state, action: PayloadAction<IMoviesFavorites>) => {
      console.log(action.payload.id);
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addCinema, removeCinema } = cinemaFavouritesSlice.actions;

export default cinemaFavouritesSlice.reducer;
