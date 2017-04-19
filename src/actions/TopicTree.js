import fetch from 'isomorphic-fetch';

export const REQUEST_TOPIC_TREE = 'REQUEST_TOPIC_TREE';
function requestTopicTree() {
  return {
    type: REQUEST_TOPIC_TREE,
  };
}

export const RECEIVE_TOPIC_TREE = 'RECEIVE_TOPIC_TREE';
function receiveTopicTree(json) {
  return {
    type: RECEIVE_TOPIC_TREE,
    topictree: json,
    receivedAt: Date.now(),
  };
}

export default function fetchTopicTree() {
  return function f(dispatch) {
    dispatch(requestTopicTree());
    return fetch('https://www.khanacademy.org/api/v1/topictree')
      .then(
        response => response.json(),
      )
      .then(json =>
        dispatch(receiveTopicTree(json)),
      );
  };
}
