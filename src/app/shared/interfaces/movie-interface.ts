export interface IResponseMovies<IMovie> {
  movies: IMovie;
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
  genres: Array<IGenre>;
  time: number;
}

export interface IGenre {
  id: string;
  name: string;
}
