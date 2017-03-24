import * as APIUtil from '../util/follows_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const DELETE_FOLLLOW = "DELETE_FOLLLOW";

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const deleteFollow = follow => ({
  type: DELETE_FOLLLOW,
  follow
});

export const followUser = id => dispatch => (
  APIUtil.follow(id)
  .then(res => dispatch(receiveFollow(res)))
);

export const unfollowUser = id => dispatch => (
  APIUtil.unfollow(id)
  .then(res => dispatch(deleteFollow(res)))
);
