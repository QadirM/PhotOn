import React from 'react';
import { Link, withRouter } from 'react-router';
class UserInfo extends React.Component{
  constructor(props) {
    super(props);
    this.editOrFollowButton = this.editOrFollowButton.bind(this);
  }

  componentDidMount(){
      this.props.fetchUser(this.props.params.id);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id);
    }
  }

  editOrFollowButton() {
    if (this.props.currentUser) {
      if (this.props.currentUser.id == this.props.params.id) {
        return(
          <div className="edit-button">
            <button type="button">Edit Profile</button>
          </div>
        );
      } else {
        return(
          <div className="follow-button">
            <button type="button">follow</button>
          </div>
        );
      }
    }
  }

  render() {
    const styles = {
      backgroundColor: "gray",
      backgroundSize: "cover",
      height: "500px"
    };
    if (this.props.user.coverUrl) {
       styles.background = `url(${this.props.user.coverUrl}) no-repeat center center fixed`;

    }
    return(
      <div className="user-info-container">
        <div className="cover-photo" style={styles}>
        </div>
        <div className="profile-photo">
          <img src={this.props.user.profileUrl}></img>
        </div>
        <div className="username">
          <p>{this.props.user.username}</p>
        </div>
        {this.editOrFollowButton()}
        <div className="bio">
          <p>{this.props.user.bio}</p>
        </div>
        <div className="followers-following">
          <p>100 followers 40 following</p>
        </div>
      </div>
    );
  }
}

export default withRouter(UserInfo);



// <img src={this.props.user.coverUrl}></img>
