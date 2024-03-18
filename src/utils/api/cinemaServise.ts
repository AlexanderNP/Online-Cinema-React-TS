import axios, { AxiosResponse } from "axios";
import { IMovies, IMoviesData } from "../models/moviesInterface";
import $api from "./api";

const API_TOKEN = "AnSRylLwQLU6jQSmohX3lDLN1EC46qr2";

export class cinemaService {
  static async getMovies(): Promise<AxiosResponse<IMovies>> {
    return $api.get<IMovies>(`/movies?api_token=${API_TOKEN}`);
  }

  static async getMovieAll(
    page: number | undefined
  ): Promise<AxiosResponse<IMovies>> {
    return $api.get<IMovies>(`/movies?api_token=${API_TOKEN}`, {
      params: { page },
    });
  }

  static async getMovieById(
    id: string | undefined
  ): Promise<AxiosResponse<IMovies>> {
    return $api.get<IMovies>(`/movies?api_token=${API_TOKEN}`, {
      params: { kinopoisk_id: id },
    });
  }

  static async getMovieBySearch(
    value: string | undefined
  ): Promise<AxiosResponse<IMovies>> {
    return $api.get<IMovies>(`/movies?api_token=${API_TOKEN}`, {
      params: { query: value },
    });
  }
}
