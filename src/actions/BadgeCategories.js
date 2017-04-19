import fetch from 'isomorphic-fetch';

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

export default function fetchAllBadgeCategories() {
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
