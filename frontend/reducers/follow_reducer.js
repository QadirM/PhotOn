import { RECEIVE_ALL_FOLLOWS,
  RECEIVE_FOLLOW, DELETE_FOLLOW } from '../actions/follow_actions';

import { merge, pull } from 'lodash';
// import pull from 'lodash/pull';

const FollowReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FOLLOW:
      let newState = merge([], state, [action.follow.id]);
      return newState;
    case DELETE_FOLLOW:
      let newState1 = merge([], state);
      pull(newState1, action.follow.id);
      return newState1;
    case RECEIVE_ALL_FOLLOWS:
      return (action.follows);
    default:
      return state;
  }
};

export default FollowReducer;
