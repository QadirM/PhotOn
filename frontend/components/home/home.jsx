import React from 'react';
// import { Link } from 'react-router';
import PhotoList from './photo_list';
import NavBarContainer from '../navbar/navbar_container';

class Home extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  componentDidUpdate() {
    this.props.fetchPhotos();
  }


  render(){
    let name = this.props.currentUser ? this.props.currentUser.username : "";

    return(
      <div className="home-container">
        <NavBarContainer />
        <div>
          <PhotoList photos={this.props.photos}/>
        </div>
      </div>
    );
  }
}

export default Home;
