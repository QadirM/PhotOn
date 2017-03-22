import { RECEIVE_ALL_PHOTOS, RECEIVE_PROFILE_PHOTOS,
    RECEIVE_PHOTO} from '../actions/photo_actions';

import merge from 'lodash/merge';

const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      let newState = merge({}, state, {[action.photo.id]: action.photo});
      return newState;
    case RECEIVE_ALL_PHOTOS:
      return merge({}, state, action.photos);
    case RECEIVE_PROFILE_PHOTOS:
      return merge({}, state, action.photos);
    default:
      return state;
  }
};

export default PhotoReducer;
