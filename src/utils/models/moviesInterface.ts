export interface IMoviesQualities{
  id: number;
  url: string;
  resoluton: number;
  media_id: number;
}

export interface IMoviesTranslation{
  id: number;
  title: string;
  priority: number;
  iframe_src: string;
  iframe: string;
  short_title: string;
  smart_title: string;
  shorter_title: string;
}

export interface IMoviesMedia{
  id: number;
  translation_id: number;
  content_id: number;
  content_type: 'movie';
  tv_series_id?: number;
  source_quality: string;
  max_quality: number;
  path: string;
  duration: number;
  created: string;
  accepted?: string;
  deleted_at?: string;
  blocked?: number;
  count_download: number;
  qualities: IMoviesQualities[];
  translation: IMoviesTranslation;
}

export interface IMoviesData{
  id: string;
  ru_title: string;
  orig_title: string;
  imdb_id: string;
  kinopoisk_id: string;
  default_media_id?: number;
  created: string;
  released?: string;
  updated: string;
  blocked: number;
  media: IMoviesMedia[];
  iframe_src: string;
  iframe: string;
  translation?: IMoviesTranslation;
  year: string;
  content_type: 'movie';
}


export interface IMovies {
  result: boolean;
  data: IMoviesData[];
  current_page: number;
  first_page_url: string;
  from: 1;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  per_page_url?: string;
  to: number;
  total: number;
  total_count: number;
}
