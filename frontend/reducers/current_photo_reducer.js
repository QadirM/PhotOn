import { RECEIVE_PHOTO,
  DELETE_PHOTO,
  MODIFY_PHOTO } from '../actions/photo_actions';

import merge from 'lodash/merge';

const CurrentPhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      let newState = merge({}, state, action.photo);
      return newState;
    case DELETE_PHOTO:
      return merge({}, state, action.photo);
    case MODIFY_PHOTO:
      return merge({}, state, action.photo);
    default:
      return state;
  }
};

export default CurrentPhotoReducer;

// {[action.photo.id]: action.photo}
