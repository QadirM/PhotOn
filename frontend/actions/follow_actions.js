import * as APIUtil from '../util/follows_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";


const receiveAllFollows = follows => {
  return {type: RECEIVE_ALL_FOLLOWS,
  follows
};};

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const deleteFollow = follow => ({
  type: DELETE_FOLLOW,
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

export const fetchFollows = () => dispatch => (
  APIUtil.fetchFollows()
      .then(res => dispatch(receiveAllFollows(res)))
);
