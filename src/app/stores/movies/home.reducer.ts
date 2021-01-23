const INITIAL_STATE = {
  listMovies: {
    movies: [],
    page: 0,
    total: 0,
    totalPage: 0,
  },
  loading: false,
};

export function homeReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCEEDED': {
      return {
        ...state,
        listMovies: action.payload,
      };
    }
    case 'IS_LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
}
