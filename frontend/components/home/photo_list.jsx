import React from 'react';

class PhotoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        {this.props.photos.map((photo) => {
          return (
            <li className="photo hvr-grow-shadow" key={photo.id}>
              <img src={photo.url}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PhotoList;
