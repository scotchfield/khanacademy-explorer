import { combineReducers } from 'redux';

import {
  FETCH_ALL_BADGES, RECEIVE_ALL_BADGES,
} from './actions';


function allBadges(state = {
  badges: [],
  status: '',
}, action) {
  switch (action.type) {
    case FETCH_ALL_BADGES:
      return Object.assign({}, state, {
        status: 'fetch',
      });
    case RECEIVE_ALL_BADGES:
      return Object.assign({}, state, {
        status: 'ok',
        badges: action.badges,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  allBadges,
});

export default rootReducer;
