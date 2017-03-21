import { connect } from 'react-redux';
import { fetchProfilePhotos, fetchPhoto, removePhoto,
  updatePhoto} from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import UserPhotosIndex from './user_photos_index';

const mapStateToProps = ({ session, user, photos, currentPhoto }) => ({
  currentUser: session.currentUser,
  user: user,
  photos: Object.keys(photos).map(key => photos[key]),
  currentPhoto: currentPhoto
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchProfilePhotos: (id) => dispatch(fetchProfilePhotos(id)),
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  removePhoto: (id) => dispatch(fetchPhoto(id)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPhotosIndex);
