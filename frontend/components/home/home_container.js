import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { uploadPhoto, fetchPhotos } from '../../actions/photo_actions';
import Home from './home';

const mapStateToProps = ({ session, photos }) => ({
  currentUser: session.currentUser,
  photos: Object.keys(photos).map(key => photos[key])
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  uploadPhoto: (photo) => dispatch(uploadPhoto(photo)),
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
