import { RECEIVE_USER, MODIFY_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return (action.user);
    case MODIFY_USER:
      return (action.user);
    default:
      return state;
  }
};

export default UserReducer;
