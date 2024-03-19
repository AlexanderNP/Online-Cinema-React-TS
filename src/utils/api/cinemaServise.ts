import { AxiosResponse } from "axios";
import { IMovies } from "../models/moviesInterface";
import $api from "./api";

const API_TOKEN = "AnSRylLwQLU6jQSmohX3lDLN1EC46qr2";

export class cinemaService {
  static async getMovies(): Promise<AxiosResponse<IMovies>> {
    return $api.get<IMovies>(`/movies`, {
      params: { api_token: API_TOKEN },
    });
  }

  static async getMovieAll(
    page: number | undefined
  ): Promise<AxiosResponse<IMovies>> {
    return $api.get<IMovies>(`/movies`, {
      params: { api_token: API_TOKEN, page },
    });
  }

  static async getMovieById(
    id: string | undefined
  ): Promise<AxiosResponse<IMovies>> {
    return $api.get<IMovies>(`/movies`, {
      params: { api_token: API_TOKEN, kinopoisk_id: id },
    });
  }

  static async getMovieBySearch(
    value: string | undefined
  ): Promise<AxiosResponse<IMovies>> {
    return $api.get<IMovies>(`/movies`, {
      params: { api_token: API_TOKEN, query: value },
    });
  }
}
