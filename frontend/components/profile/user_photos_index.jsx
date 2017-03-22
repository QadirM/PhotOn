import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class UserPhotosIndex extends React.Component{
  constructor(props) {
    super(props);
    this.indexItems = this.indexItems.bind(this);
    this.state = { modalOpen: false, photoUrl: ""};

    this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

		this.setState({photoUrl: photo.url}) ;
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

  render() {
    return(
      <div className="user-photos-index">
        {this.indexItems()}

        <Modal
						contentLabel="Modal"
						isOpen={this.state.modalOpen}
						onRequestClose={this.closeModal}>
						<div className="modal-body">
							<div className="close-button">
                <button onClick={this.closeModal}>X</button>
							</div>
              <img src={this.state.photoUrl}/>
						</div>
					</Modal>
      </div>
    );
  }
}

export default withRouter(UserPhotosIndex);
