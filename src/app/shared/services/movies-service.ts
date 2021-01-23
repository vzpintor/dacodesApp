import {Dispatch} from 'redux';
import {
  fetchMovies,
  setCurrentMovie,
  setLoading,
} from '@stores/movies/home-action';

const API = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '634b49e294bd1ff87914e7b9d014daed';

export const getMovies = (page: number) => {
  const URL = `${API}now_playing?api_key=${API_KEY}&language=en-US&page=${page}`;
  console.log('Loading movies in page: ', page);
  return function (dispatch: Dispatch<any>) {
    dispatch(setLoading(true));
    fetch(URL).then((response) => {
      response.json().then((data) => {
        const result = {
          page: data.page,
          totalPage: data.total_pages,
          total: data.total_results,
          movies: data.results.map((m: any) => {
            return {
              id: m.id,
              title: m.title,
              date: m.release_date,
              voteAverage: m.vote_average,
              image: m.backdrop_path,
            };
          }),
        };

        dispatch(fetchMovies(result));
        dispatch(setLoading(false));
      });
    });
  };
};

export const getMovieDetail = (idMovie: number) => {
  const URL = `${API}${idMovie}?api_key=${API_KEY}&language=en-US`;
  return function (dispatch: Dispatch<any>) {
    dispatch(setLoading(true));
    fetch(URL).then((response) => {
      response.json().then((data) => {
        const result = {
          id: data.id,
          title: data.title,
          date: data.release_date,
          voteAverage: data.vote_average,
          image: data.backdrop_path,
          description: data.overview,
          time: data.runtime,
          genres: [...data.genres],
        };

        dispatch(setCurrentMovie(result));
        dispatch(setLoading(false));
      });
    });
  };
};
