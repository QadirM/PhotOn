import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const MODIFY_USER = "MODIFY_USER";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const modifyUser = user => ({
  type: MODIFY_USER,
  user
});

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
  .then(res => dispatch(receiveUser(res)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
      .then(res => dispatch(modifyUser(res)))
);
