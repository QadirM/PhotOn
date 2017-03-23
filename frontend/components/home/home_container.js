import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import Home from './home';

const mapStateToProps = ({ session, photos, user }) => ({
  user: user,
  currentUser: session.currentUser,
  photos: Object.keys(photos).map(key => photos[key])
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
