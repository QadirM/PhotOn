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
    cloudinary.openUploadWidget({
      cloud_name: 'qadir',
      upload_preset: 'regular'
      }, (error, results) => {
      if(!error){
        that.postPhoto(results[0]);
      }else{
        console.log(error);
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
      <nav className="main-nav-bar">

        <nav className="main-left-nav">
          <Link to="/" activeClassName="current">
            <i className="fa fa-bolt" aria-hidden="true"></i>PhotOn
            </Link>
        </nav>

        <nav className="main-right-nav">
          <img id="mini-profile-pic" src={userProfileUrl} onClick={this.goToProfile}></img>
          &nbsp;
          <Link to={`/user/${userId}`} className="profile-link">{user}</Link>
          &nbsp;
          <button className="main-nav-button" onClick={this.upload}>
            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
            Upload</button>
          &nbsp;
          <button className="main-nav-button" onClick={this.props.logout}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>LogOut</button>
        </nav>

      </nav>
    );
  }
}

export default withRouter(NavBar);
