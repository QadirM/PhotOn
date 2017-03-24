import { connect } from 'react-redux';
import { fetchDiscoverPhotos } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import { followUser, unfollowUser, fetchFollows } from '../../actions/follow_actions';
import Discover from './discover';

const mapStateToProps = ({ session, photos, user }) => ({
  user: user,
  currentUser: session.currentUser,
  photos: Object.keys(photos).map(key => photos[key])
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchDiscoverPhotos: () => dispatch(fetchDiscoverPhotos()),
  followUser: (id) => dispatch(followUser(id)),
  unFollowUser: (id) => dispatch(unfollowUser(id)),
  fetchFollows: (id) => dispatch(fetchFollows())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
