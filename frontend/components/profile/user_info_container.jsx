import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { followUser, unfollowUser, fetchFollows } from '../../actions/follow_actions';
import UserInfo from './user_info';

const mapStateToProps = ({ session, user, follows }) => ({
  currentUser: session.currentUser,
  user: user,
  follows: follows
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (user) => dispatch(updateUser(user)),
  followUser: (id) => dispatch(followUser(id)),
  unfollowUser: (id) => dispatch(unfollowUser(id)),
  fetchFollows: (id) => dispatch(fetchFollows())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
