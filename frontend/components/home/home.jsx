import React from 'react';
// import { Link } from 'react-router';
import UploadButton from './upload_button';
import PhotoList from './photo_list';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.postPhoto = this.postPhoto.bind(this);
    this.upload = this.upload.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  postPhoto(photo) {
    this.props.uploadPhoto(photo);
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

  render(){
    let name = this.props.currentUser ? this.props.currentUser.username : "";

    return(
      <div className="home-container">
      	<div className="header-group">
          <h2 className="header-name">Hi, {name}</h2>
          <button className="header-button" onClick={this.props.logout}>Log Out</button>
      	</div>
        <div>
          <button onClick={this.upload}>Upload new photo!</button>
          <PhotoList photos={this.props.photos}/>
        </div>
      </div>
    );
  }
}

// <UploadButton postPhoto={this.postPhoto}/>

export default Home;
