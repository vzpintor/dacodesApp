export interface IResponseMovies<IMovie> {
  movies: IMovie;
  page: number;
  total: number;
  totalPage: number;
}

export interface IMovie {
  title: string;
  date: string;
  voteAverage: number;
  image: string;
}
