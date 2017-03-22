import { RECEIVE_ALL_PHOTOS, RECEIVE_PROFILE_PHOTOS,
    RECEIVE_PHOTO,
    DELETE_PHOTO, MODIFY_PHOTO } from '../actions/photo_actions';

import merge from 'lodash/merge';

const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      let newState = merge({}, state, {[action.photo.id]: action.photo});
      return newState;
    case MODIFY_PHOTO:
      let newState2 = merge({}, state, {[action.photo.id]: action.photo});
      return newState2;
    case DELETE_PHOTO:
      let newState1 = merge({}, state);
      delete newState1[action.photo.id];
      return newState1;
    case RECEIVE_ALL_PHOTOS:
      return ( action.photos);
    case RECEIVE_PROFILE_PHOTOS:
      return (action.photos);
    default:
      return state;
  }
};

export default PhotoReducer;
