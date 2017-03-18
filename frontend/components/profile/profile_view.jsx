import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from '../navbar/navbar_container';

class ProfileView extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.currentUser ? this.props.currentUser.username : "";
    let userId = this.props.currentUser ? this.props.currentUser.id : "";
    return(
      <div className="profile-view-container">
        <NavBarContainer />
        <div className="user-info-container">
          <p>User Info Here</p>
        </div>
        <div className="user-photos-index">
          <p>User Photos Index Here</p>
        </div>
      </div>
    );
  }
}

export default ProfileView;
