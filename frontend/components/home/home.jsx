import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
// import PhotoList from './photo_list';
import NavBarContainer from '../navbar/navbar_container';

class Home extends React.Component{
  constructor(props) {
    super(props);

    this.state = { modalOpen: false, photo: {} , user: {}};

    this.photoList = this.photoList.bind(this);

    this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  photoList() {
    return(
      <ul>
        {this.props.photos.map((photo) => {
          return (
            <li className="photo" key={photo.id}>
              <img src={photo.url} onClick={() => this.handleClick(photo)}/>
            </li>
          );
        })}
      </ul>
    );
  }

  openModal() {
		this.setState({modalOpen: true});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

  handleClick(photo) {
    this.props.fetchUser(photo.userId);
		this.setState({photo: photo, modalOpen: true }) ;
	}

  render(){
    let name = this.props.currentUser ? this.props.currentUser.username : "";

    return(
      <div className="home-container">
        <NavBarContainer />
        <div className="user-photos-index">
          {this.photoList()}
        </div>

        <Modal
						contentLabel="Modal"
						isOpen={this.state.modalOpen}
						onRequestClose={this.closeModal}
            >
						<div className="modal-body">

							<div className="top-side">
                <button className="close-button" onClick={this.closeModal}>
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </button>
  						</div>

              <div className="left-side">
                <div className="photo-view">
                  <img src={this.state.photo.url}/>
                </div>
              </div>

              <div className="right-side">
                <div className="photo-user-profile">
                  <img src={this.props.user.profileUrl}/>
                  <Link to={`/user/${this.props.user.id}`}
                    className="user-link">{this.props.user.username}</Link>
                </div>

                <div className="photo-title">
                  {this.state.photo.title}
                </div>

                <div className="photo-description">
                  {this.state.photo.description}
                </div>

              </div>

            </div>
					</Modal>
      </div>
    );
  }
}

export default Home;
