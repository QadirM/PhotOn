import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class UserInfo extends React.Component{
  constructor(props) {
    super(props);
    // this.state = { modalOpen: false, user: {}};

    this.editOrFollowButton = this.editOrFollowButton.bind(this);

    // this.openModal = this.openModal.bind(this);
		// this.closeModal = this.closeModal.bind(this);
		// this.editUser = this.editUser.bind(this);
  }

  componentDidMount(){
      this.props.fetchUser(this.props.params.id);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id);
    }
  }

  // openModal() {
	// 	this.setState({modalOpen: true});
	// }
  //
	// closeModal() {
	// 	this.setState({modalOpen: false});
	// }
  //
  // editUser() {
  //
	// }

  editOrFollowButton() {
    if (this.props.currentUser) {
      if (this.props.currentUser.id == this.props.params.id) {
        return(
          <div className="edit-button">
            <button type="button" onClick={this.openModal}>Edit Profile</button>
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
        <div className="followers-following">
          <p>100 followers 40 following</p>
        </div>
      </div>
    );
  }
}

export default withRouter(UserInfo);



// <img src={this.props.user.coverUrl}></img>

// <Modal
//     contentLabel="Modal"
//     isOpen={this.state.modalOpen}
//     onRequestClose={this.closeModal}
//     >
//     <div className="modal-body">
//
//       <div className="top-side">
//         <button className="close-button" onClick={this.closeModal}>
//           <i className="fa fa-times-circle" aria-hidden="true"></i>
//         </button>
//       </div>
//
//       <div className="bottom-side">
//         <form onSubmit={this.editUser} className="edit-photo-form">
//           <div className="edit-form">
//             <br/>
//               <label>Bio</label>
//               <br/>
//                 <textarea rows="4" cols="50"
//                   value={this.props.currentUser.bio}
//                   onChange={this.update("description")}
//                   className="description-input" />
//
//             <br/>
//             <input id="submit" type="submit" value="Save" />
//         </div>
//         </form>
//       </div>
//
//     </div>
//   </Modal>
