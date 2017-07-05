/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED
} from './constants';

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message
  };
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links
  };
}
