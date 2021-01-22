import {combineReducers} from 'redux';
import {homeReducer} from '@stores/landing/home.reducer';

export const rootReducer = combineReducers({
  landingReducer: homeReducer,
});

// const rootReducer = (state: any, action: any) => {
//   if (action.type === 'LOGOUT_USER') {
//     state.landing = undefined;
//   }
//
//   return appReducer(state, action);
// };

export default rootReducer;
