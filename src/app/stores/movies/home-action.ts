import {IMovie, IResponseMovies} from '@shared/interfaces/movie-interface';

export const fetchMovies = (list: IResponseMovies<IMovie>) => ({
  type: 'FETCH_MOVIES_SUCCEEDED',
  payload: list,
});

export const setLoading = (loading: boolean) => ({
  type: 'IS_LOADING',
  payload: loading,
});

export const setCurrentMovie = (movie: IMovie) => ({
  type: 'CURRENT_MOVIE_ASSIGNED',
  payload: movie,
});
