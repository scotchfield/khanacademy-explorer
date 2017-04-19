import { combineReducers } from 'redux';

import {
  FETCH_ALL_BADGES, RECEIVE_ALL_BADGES,
} from './actions/AllBadges';
import {
  FETCH_ALL_BADGE_CATEGORIES, RECEIVE_ALL_BADGE_CATEGORIES,
} from './actions/BadgeCategories';
import {
  FETCH_ALL_EXERCISES, RECEIVE_ALL_EXERCISES,
} from './actions/Exercises';
import {
  FETCH_TOPIC_TREE, RECEIVE_TOPIC_TREE,
} from './actions/TopicTree';


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

function allExercises(state = {
  exercises: [],
  status: '',
}, action) {
  switch (action.type) {
    case FETCH_ALL_EXERCISES:
      return Object.assign({}, state, {
        status: 'fetch',
      });
    case RECEIVE_ALL_EXERCISES:
      return Object.assign({}, state, {
        status: 'ok',
        exercises: action.exercises,
      });
    default:
      return state;
  }
}

function allTopicTree(state = {
  topictree: [],
  status: '',
}, action) {
  switch (action.type) {
    case FETCH_TOPIC_TREE:
      return Object.assign({}, state, {
        status: 'fetch',
      });
    case RECEIVE_TOPIC_TREE:
      return Object.assign({}, state, {
        status: 'ok',
        topictree: action.topictree,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  allBadges,
  allBadgeCategories,
  allExercises,
  allTopicTree,
});

export default rootReducer;
