import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS } from './constants';
import { takeLatest } from 'redux-saga';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';

export function fetchTopicsFromServer() {
  return fetch('http://10.166.43.221:3000/api/topics')
    .then(response => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (error) {
    yield put(requestTopicsFailed(error.message));
  }
  
}


// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
