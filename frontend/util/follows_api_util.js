export const follow = (followingId) => {
  return $.ajax({
    method: 'POST',
    url: `api/follows`,
    data: {
      follow: {following_id: followingId}
    }
  });
};

export const unfollow = (followingId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/1`,
    data: {
      follow: {following_id: followingId}
    }
  });
};

export const fetchFollows = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/follows'
  });
};
