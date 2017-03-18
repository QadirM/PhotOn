import React from 'react';

class PhotoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        {this.props.photos.map(function (photo) {
          return (
            <li className="photo" key={photo.id}>
              <img src={photo.url}/>
            </li>
          );
        }, this)}
      </ul>
    );
  }
}

export default PhotoList;
