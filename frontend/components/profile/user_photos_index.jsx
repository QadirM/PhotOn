import React from 'react';
import { Link, withRouter } from 'react-router';

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
    return (<ul>
      {this.props.photos.map((photo) => {
        return (
          <li className="photo" key={photo.id}>
            <img src={photo.url}/>
          </li>
        );
      })}
    </ul>);
  }

  render() {
    return(
      <div className="user-photos-index">
        {this.indexItems()}
      </div>
    );
  }
}

export default withRouter(UserPhotosIndex);
