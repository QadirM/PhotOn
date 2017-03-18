import {
  RECEIVE_PHOTO,
  RECEIVE_ALL_PHOTOS,
  DELETE_PHOTO,
  MODIFY_PHOTO } from '../actions/photo_actions';

import merge from 'lodash/merge';

const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      let newState = merge({}, state, {[action.photo.id]: action.photo});
      debugger;
      return newState;
    case RECEIVE_ALL_PHOTOS:
      return merge({}, state, action.photos);
    case DELETE_PHOTO:
      return merge({}, state, action.photo);
    case MODIFY_PHOTO:
      return merge({}, state, action.photo);
    default:
      return state;
  }
};

export default PhotoReducer;

// {[action.photo.id]: action.photo}
