import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class UserPhotosIndex extends React.Component{
  constructor(props) {
    super(props);
    this.indexItems = this.indexItems.bind(this);
    this.state = { modalOpen: false, photo: {} , user: {}};

    this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleClick = this.handleClick.bind(this);

    this.editPhoto = this.editPhoto.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  componentDidMount(){
      this.props.fetchProfilePhotos(this.props.params.id);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchProfilePhotos(nextProps.params.id);
    }
  }

  openModal() {
		this.setState({modalOpen: true});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

	handleClick(photo) {
    this.props.fetchUser(photo.userId);
		this.setState({photo: photo}) ;
		this.setState({ modalOpen: true });
	}

  indexItems(){
    return (<ul>
      {this.props.photos.map((photo) => {
        return (
          <li className="photo" key={photo.id}>
            <img src={photo.url} onClick={() => this.handleClick(photo)}/>
          </li>
        );
      })}
    </ul>);
  }

  editPhoto() {

  }

  deletePhoto() {
    this.closeModal();
    this.props.removePhoto(this.state.photo.id);
  }

  render() {
    return(
      <div className="user-photos-index">
        {this.indexItems()}

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

              <div className="bottom-side">
                <button className="edit-button" onClick={this.editPhoto}>Edit</button>
                &nbsp;
                <button className="delete-button" onClick={this.deletePhoto}>Delete</button>
              </div>

            </div>
					</Modal>
      </div>
    );
  }
}

export default withRouter(UserPhotosIndex);
