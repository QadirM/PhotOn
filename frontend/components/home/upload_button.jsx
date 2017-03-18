import React from 'react';

class UploadButton extends React.Component{
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.props.postPhoto(results[0]);
      }
    }.bind(this));
  }

  render() {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload new photo!</button>
      </div>
    );
  }
}

export default UploadButton;
