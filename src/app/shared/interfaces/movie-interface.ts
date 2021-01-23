export interface IResponseMovies<IMovie> {
  movies: Array<IMovie>;
  page: number;
  total: number;
  totalPage: number;
}

export interface IMovie {
  id: number;
  title: string;
  date: string;
  voteAverage: number;
  image: string;
  description: string;
  time: number;
  genres: Array<IGenre>;
}

export interface IGenre {
  id: string;
  name: string;
}

export interface IMoviesState {
  listMovies: IResponseMovies<IMovie>;
  loading: boolean;
  currentMovie?: IMovie;
}
