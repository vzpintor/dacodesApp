import {IMoviesState} from '@shared/interfaces/movie-interface';

const INITIAL_STATE: IMoviesState = {
  listMovies: {
    movies: [],
    page: 1,
    total: 0,
    totalPage: 0,
  },
  loading: false,
  currentMovie: undefined,
};

export function homeReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCEEDED': {
      return {
        ...state,
        listMovies: {
          movies: [...state.listMovies.movies, ...action.payload.movies],
          page: action.payload.page,
          total: action.payload.total,
          totalPage: action.payload.totalPage,
        },
      };
    }
    case 'IS_LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case 'CURRENT_MOVIE_ASSIGNED': {
      return {
        ...state,
        currentMovie: action.payload,
      };
    }
    default:
      return state;
  }
}
