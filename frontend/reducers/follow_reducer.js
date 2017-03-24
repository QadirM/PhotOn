import { RECEIVE_ALL_FOLLOWS,
  RECEIVE_FOLLOW, DELETE_FOLLOW } from '../actions/follow_actions';

// import { merge, pull } from 'lodash';
// import pull from 'lodash/pull';

const FollowReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FOLLOW:
      return state.concat([action.follow.following_id]);
    case DELETE_FOLLOW:
      return state.filter(element => element !== action.follow.following_id);
    case RECEIVE_ALL_FOLLOWS:
      return action.follows;
    default:
      return state;
  }
};

export default FollowReducer;
