import {combineReducers} from 'redux';
import {homeReducer} from '@stores/movies/home.reducer';

export const rootReducer = combineReducers({
  moviesReducer: homeReducer,
});

export default rootReducer;
