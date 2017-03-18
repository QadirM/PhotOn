import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
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

  render() {
    let user = this.props.currentUser ? this.props.currentUser.username : "";
    let userId = this.props.currentUser ? this.props.currentUser.id : "";
    return(
      <nav className="nav-bar">

        <nav className="left-nav">
          <Link to="/" activeClassName="current">Photon</Link>
        </nav>

        <nav className="right-nav">
          <Link to={`/user/${userId}`} className="test">{user}</Link>
          &nbsp;
          <button onClick={this.upload}>Upload</button>
          &nbsp;
          <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </nav>

      </nav>
    );
  }
}

export default NavBar;
