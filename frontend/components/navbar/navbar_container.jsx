import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { uploadPhoto } from '../../actions/photo_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session, photos }) => ({
  currentUser: session.currentUser,
  photos: Object.keys(photos).map(key => photos[key])
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  uploadPhoto: (photo) => dispatch(uploadPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
