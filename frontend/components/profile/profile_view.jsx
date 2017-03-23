import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from '../navbar/navbar_container';
import UserInfoContainer from './user_info_container';
import UserPhotosIndexContainer from './user_photos_index_container';

class ProfileView extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let user = this.props.currentUser ? this.props.currentUser.username : "";
    let userId = this.props.currentUser ? this.props.currentUser.id : "";
    return(
      <div className="profile-view-container">
        <NavBarContainer />
        <UserInfoContainer />
        <UserPhotosIndexContainer />
      </div>
    );
  }
}

export default ProfileView;
