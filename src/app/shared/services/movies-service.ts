import {Dispatch} from 'redux';
import {fetchMovies, setLoading} from '@stores/movies/home-action';

const URL =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=634b49e294bd1ff87914e7b9d014daed&language=en-US&page=1';

export const getMovies = () => {
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
              title: m.title,
              date: m.release_date,
              voteAverage: m.vote_average,
              image: m.backdrop_path,
            };
          }),
        };
        // });

        dispatch(fetchMovies(result));
        dispatch(setLoading(false));
      });
    });
  };
};
