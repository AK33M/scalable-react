import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';

function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    yield put(requestLinksSucceeded(links));
  } catch (error) {
    yield put(requestLinksFailed(error.message));
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield*  takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
