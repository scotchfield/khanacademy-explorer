import fetch from 'isomorphic-fetch';

export const REQUEST_ALL_BADGES = 'REQUEST_ALL_BADGES';
function requestAllBadges() {
  return {
    type: REQUEST_ALL_BADGES,
  };
}

export const RECEIVE_ALL_BADGES = 'RECEIVE_ALL_BADGES';
function receiveAllBadges(json) {
  return {
    type: RECEIVE_ALL_BADGES,
    badges: json,
    receivedAt: Date.now(),
  };
}

export function fetchAllBadges() {
  return function f(dispatch) {
    dispatch(requestAllBadges());
    return fetch('https://www.khanacademy.org/api/v1/badges')
      .then(
        response => response.json(),
      )
      .then(json =>
        dispatch(receiveAllBadges(json)),
      );
  };
}

export const REQUEST_ALL_BADGE_CATEGORIES = 'REQUEST_ALL_BADGE_CATEGORIES';
function requestAllBadgeCategories() {
  return {
    type: REQUEST_ALL_BADGE_CATEGORIES,
  };
}

export const RECEIVE_ALL_BADGE_CATEGORIES = 'RECEIVE_ALL_BADGE_CATEGORIES';
function receiveAllBadgeCategories(json) {
  return {
    type: RECEIVE_ALL_BADGE_CATEGORIES,
    categories: json,
    receivedAt: Date.now(),
  };
}

export function fetchAllBadgeCategories() {
  return function f(dispatch) {
    dispatch(requestAllBadgeCategories());
    return fetch('https://www.khanacademy.org/api/v1/badges/categories')
      .then(
        response => response.json(),
      )
      .then(json =>
        dispatch(receiveAllBadgeCategories(json)),
      );
  };
}
