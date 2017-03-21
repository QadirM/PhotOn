import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import Home from './home';

const mapStateToProps = ({ session, photos }) => ({
  currentUser: session.currentUser,
  photos: Object.keys(photos).map(key => photos[key])
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
