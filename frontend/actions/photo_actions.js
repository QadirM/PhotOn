import * as APIUtil from '../util/photos_api_util';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PROFILE_PHOTOS = "RECEIVE_PROFILE_PHOTOS";
export const DELETE_PHOTO = "REMOVE_PHOTO";
export const MODIFY_PHOTO = "MODIFY_PHOTO";

const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

const receiveProfilePhotos = photos => ({
  type: RECEIVE_PROFILE_PHOTOS,
  photos
});

const deletePhoto = photo => ({
  type: DELETE_PHOTO,
  photo
});

const modifyPhoto = photo => ({
  type: MODIFY_PHOTO,
  photo
});

export const uploadPhoto = photo => dispatch => (
  APIUtil.uploadPhoto(photo)
      .then(res => dispatch(receivePhoto(res)))
);

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id)
  .then(res => dispatch(receivePhoto(res)))
);

export const fetchPhotos = () => dispatch => (
  APIUtil.fetchPhotos()
      .then(res => dispatch(receiveAllPhotos(res)))
);

export const fetchProfilePhotos = (id) => dispatch => (
  APIUtil.fetchProfilePhotos(id)
      .then(res => dispatch(receiveProfilePhotos(res)))
);

export const removePhoto = id => dispatch => (
  APIUtil.removePhoto(id)
      .then(res => dispatch(deletePhoto(res)))
);

export const updatePhoto = photo => dispatch => (
  APIUtil.updatePhoto(photo)
      .then(res => dispatch(modifyPhoto(res)))
);
