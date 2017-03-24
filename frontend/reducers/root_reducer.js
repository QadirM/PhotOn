import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import CurrentPhotoReducer from './current_photo_reducer';
import UserReducer from './user_reducer';
import FollowReducer from './follow_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  currentPhoto: CurrentPhotoReducer,
  user: UserReducer,
  follows: FollowReducer
});

export default RootReducer;
