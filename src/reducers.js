import { combineReducers } from 'redux';

import {
  FETCH_ALL_BADGES, RECEIVE_ALL_BADGES,
  FETCH_ALL_BADGE_CATEGORIES, RECEIVE_ALL_BADGE_CATEGORIES,
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

function allBadgeCategories(state = {
  categories: [],
  status: '',
}, action) {
  switch (action.type) {
    case FETCH_ALL_BADGE_CATEGORIES:
      return Object.assign({}, state, {
        status: 'fetch',
      });
    case RECEIVE_ALL_BADGE_CATEGORIES:
      return Object.assign({}, state, {
        status: 'ok',
        categories: action.categories,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  allBadges,
  allBadgeCategories,
});

export default rootReducer;
