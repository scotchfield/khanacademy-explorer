import fetch from 'isomorphic-fetch';

export const REQUEST_ALL_EXERCISES = 'REQUEST_ALL_EXERCISES';
function requestAllExercises() {
  return {
    type: REQUEST_ALL_EXERCISES,
  };
}

export const RECEIVE_ALL_EXERCISES = 'RECEIVE_ALL_EXERCISES';
function receiveAllExercises(json) {
  console.log(json);
  return {
    type: RECEIVE_ALL_EXERCISES,
    exercises: json,
    receivedAt: Date.now(),
  };
}

export default function fetchAllExercises() {
  return function f(dispatch) {
    dispatch(requestAllExercises());
    return fetch('https://www.khanacademy.org/api/v1/exercises')
      .then(
        response => response.json(),
      )
      .then(json =>
        dispatch(receiveAllExercises(json)),
      );
  };
}
