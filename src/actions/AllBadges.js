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

export default function fetchAllBadges() {
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
