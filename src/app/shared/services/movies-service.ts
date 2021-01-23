import {Dispatch} from 'redux';
import {fetchMovies, setLoading} from '@stores/movies/home-action';

export const getMovies = (page: number) => {
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=634b49e294bd1ff87914e7b9d014daed&language=en-US&page=${page}`;
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

export const getMovieDetail = (page: number) => {
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=634b49e294bd1ff87914e7b9d014daed&language=en-US&page=${page}`;
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
