import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UserInfo from './user_info';

const mapStateToProps = ({ session, user }) => ({
  currentUser: session.currentUser,
  user: user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
