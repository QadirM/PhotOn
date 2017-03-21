import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
  }

  upload(e) {
    e.preventDefault();
    let that = this;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        that.postPhoto(results[0]);
      }
    });
  }

  postPhoto(photo) {
    this.props.uploadPhoto(photo);
  }

  goToProfile(e) {
    e.preventDefault();
    this.props.router.push(`/user/${this.props.currentUser.id}`);
  }

  render() {
    let user = this.props.currentUser ? this.props.currentUser.username : "";
    let userId = this.props.currentUser ? this.props.currentUser.id : "";
    let userProfileUrl = this.props.currentUser ? this.props.currentUser.profileUrl : "";
    return(
      <nav className="nav-bar">

        <nav className="left-nav">
          <Link to="/" activeClassName="current">Photon</Link>
        </nav>

        <nav className="right-nav">
          <img className="profile-image" src={userProfileUrl} onClick={this.goToProfile}></img>
          &nbsp;
          <Link className="profile-image" to={`/user/${userId}`} className="test">{user}</Link>
          &nbsp;
          <button className="profile-image" onClick={this.upload}>Upload</button>
          &nbsp;
          <button className="profile-image" className="header-button" onClick={this.props.logout}>
            Log Out</button>
        </nav>

      </nav>
    );
  }
}

export default withRouter(NavBar);
