import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class UserInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, user: {}};

    this.editOrFollowButton = this.editOrFollowButton.bind(this);

    this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

    this.handleClick = this.handleClick.bind(this);
		this.editUser = this.editUser.bind(this);
    this.uploadCoverPic = this.uploadCoverPic.bind(this);
    this.uploadProfilePic = this.uploadProfilePic.bind(this);

    this.unfollow = this.unfollow.bind(this);
    this.follow = this.follow.bind(this);
  }

  componentDidMount(){
      this.props.fetchUser(this.props.params.id);
      this.props.fetchFollows();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id);
      this.props.fetchFollows();
    }
  }

  openModal() {
		this.setState({modalOpen: true});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

  follow() {
    this.props.followUser(this.props.user.id);
  }

  unfollow() {
    this.props.unfollowUser(this.props.user.id);
  }

  handleClick() {
		this.setState({user: this.props.user, modalOpen: true }) ;
	}

  update(field) {
		return e => {
      let newUser = merge({}, this.state.user);
      newUser[field] = e.currentTarget.value;
      this.setState({ user: newUser });
    };
	}

  editUser(e) {
    e.preventDefault();
    this.closeModal();

    const user = this.state.user;
    this.props.updateUser(user);
	}

  uploadCoverPic() {
    let that = this;
    cloudinary.openUploadWidget({
      cloud_name: 'qadir',
      upload_preset: 'profilecover'
      }, (error, results) => {
      if(!error){
        let newUser = merge({}, this.state.user);
        newUser.cover_url = results[0].url;
        this.setState({ user: newUser });
        this.openModal();
      }else{
        console.log(error);
        this.openModal();
      }
    });

  }

  uploadProfilePic() {
    let that = this;
    cloudinary.openUploadWidget({
      cloud_name: 'qadir',
      upload_preset: 'profilephoto'
      }, (error, results) => {
      if(!error){
        let newUser = merge({}, this.state.user);
        newUser.profile_url = results[0].url;
        this.setState({ user: newUser });
        this.openModal();
      }else{
        console.log(error);
        this.openModal();
      }
    });


  }

  editOrFollowButton() {
    if (this.props.currentUser) {
      if (this.props.currentUser.id == this.props.params.id) {
        return(
          <div className="edit-button">
            <button type="button" onClick={() => this.handleClick()}>Edit Profile</button>
          </div>
        );
      }
      else if (this.props.follows.includes(this.props.user.id)) {
        return(
          <div className="follow-button">
            <button type="button" onClick={() => this.unfollow()}>Following</button>
          </div>
        );
      }
      else{
        return(
          <div className="following-button">
            <button type="button" onClick={() => this.follow()}>Follow</button>
          </div>
        );
      }
    }
  }

  render() {

    const modalStyle = {
        content: {
          maxWidth: "400px",
          maxHeight: "580px",
          position: "absolute",
          top: "50%",
          left: "50%",
          bottom: "auto",
          transform: "translate(-50%, -50%)"
        }
    };

    const styles = {
      backgroundColor: "gray",
      backgroundSize: "cover",
      height: "500px",
      width: "100%"
    };
    if (this.props.user.coverUrl) {
       styles.background = `url(${this.props.user.coverUrl}) no-repeat top center fixed`;

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

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ modalStyle }
          >
          <div className="modal-body">

            <div className="content">
              <div className="left-side">
                <div className="top-side">
                  <button className="close-button" onClick={this.closeModal}>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                  </button>
                </div>

                <div className="photo-view">
                  <form onSubmit={this.editUser} className="update-profile-form">

                    <div className="image-buttons">
                      <button className="cover-button"
                        onClick={this.uploadCoverPic}>
                        Upload New Cover Photo</button>
                      <button className="profile-button"
                        onClick={this.uploadProfilePic}>
                        Upload New Profile Photo</button>
                    </div>

                    <label>Bio</label>
                    <br/>
                    <textarea rows="7" cols="50"
                      value={this.state.user.bio}
                      onChange={this.update("bio")}
                      className="bio-input" />
                    <br/>
                    <input id="submit" type="submit" value="Save" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>

      </div>
    );
  }
}

export default withRouter(UserInfo);
