import React from 'react';
import { Link, withRouter } from 'react-router';
import Masonry from 'react-masonry-component';

var masonryOptions = {
    transitionDuration: 0
};

class UserPhotosIndex extends React.Component{
  constructor(props) {
    super(props);
    this.indexItems = this.indexItems.bind(this);
  }

  componentDidMount(){
      this.props.fetchProfilePhotos(this.props.params.id);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchProfilePhotos(nextProps.params.id);
    }
  }

  indexItems(){

  }

  render() {
    let indexItems = this.props.photos.map((photo) => {
      return (
        <li className="photo hvr-grow-shadow" key={photo.id}>
          <img src={photo.url}/>
        </li>
      );
    });

    return(
      <Masonry
        className="user-photos-index"
        elementType={'ul'}
        options={masonryOptions}
        disabledImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {indexItems}
      </Masonry>
    );
  }
}

export default withRouter(UserPhotosIndex);
