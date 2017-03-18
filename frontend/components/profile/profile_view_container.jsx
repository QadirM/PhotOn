import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { uploadPhoto,
  fetchPhotos,
  fetchPhoto,
  removePhoto,
  updatePhoto } from '../../actions/photo_actions';
import ProfileView from './profile_view';

const mapStateToProps = ({ session, photos }) => ({
  currentUser: session.currentUser,
  photos: Object.keys(photos).map(key => photos[key])
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  uploadPhoto: (photo) => dispatch(uploadPhoto(photo)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  removePhoto: (id) => dispatch(fetchPhoto(id)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileView);
