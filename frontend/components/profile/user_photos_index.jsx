import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class UserPhotosIndex extends React.Component{
  constructor(props) {
    super(props);
    this.indexItems = this.indexItems.bind(this);
    this.state = { modalOpen: false, modalOpen2: false, photo: {} , user: {}};

    this.openModal2 = this.openModal2.bind(this);
		this.closeModal2 = this.closeModal2.bind(this);

    this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleClick = this.handleClick.bind(this);

    this.editPhotoForm = this.editPhotoForm.bind(this);
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

  openModal2() {
		this.setState({modalOpen2: true});
	}

	closeModal2() {
		this.setState({modalOpen2: false});
	}

	handleClick(photo) {
    this.props.fetchUser(photo.userId);
		this.setState({photo: photo, modalOpen: true }) ;
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

  editPhotoForm() {
    this.closeModal();
    this.openModal2();
  }

  editPhoto(e) {
    e.preventDefault();
    this.closeModal2();

    const photo = this.state.photo;
    delete photo["username"];
    delete photo["profilePhoto"];

		this.props.updatePhoto(photo);
    this.openModal();
  }

  update(field) {
		return e => {
      // debugger;
      let newPhoto = merge({}, this.state.photo);
      newPhoto[field] = e.currentTarget.value;
      this.setState({ photo: newPhoto });
    };
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
                <button className="edit-button" onClick={this.editPhotoForm}>Edit</button>
                &nbsp;
                <button className="delete-button" onClick={this.deletePhoto}>Delete</button>
              </div>

            </div>
					</Modal>

          <Modal
  						contentLabel="Modal"
  						isOpen={this.state.modalOpen2}
  						onRequestClose={this.closeModal2}
              >
  						<div className="modal-body">

  							<div className="top-side">
                  <button className="close-button" onClick={this.closeModal2}>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                  </button>
    						</div>

                <div className="left-side">
                  <div className="photo-view">
                    <img src={this.state.photo.url}/>
                  </div>
                </div>

                <div className="right-side">
                  <form onSubmit={this.editPhoto} className="edit-photo-form">
          					<div className="edit-form">
          						<br/>
                        <label>Title</label>
                        <br/>
            							<input type="text"
            								value={this.state.photo.title}
            								onChange={this.update("title")}
            								className="title-input" />

          						<br/>
          						<br/>
          						<br/>
                        <label>Description</label>
                        <br/>
            							<textarea rows="4" cols="50"
            								value={this.state.photo.description}
            								onChange={this.update("description")}
            								className="description-input" />

          						<br/>
          						<input id="submit" type="submit" value="Save" />
          				</div>
          				</form>
                </div>

              </div>
  					</Modal>
      </div>
    );
  }
}

export default withRouter(UserPhotosIndex);
