export const uploadPhoto = (photo) => {
  // NB: the data line below is temporary
  let data = {photo: {title: "title", url: photo.secure_url,
  description: ""}};

  return $.ajax({
    method: 'POST',
    url: '/api/photos',
    data
  });
};

export const fetchPhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  });
};

export const fetchPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/photos'
  });
};

export const fetchDiscoverPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/photos/discover'
  });
};

export const fetchProfilePhotos = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/photos`
  });
};

export const removePhoto = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/photos/${id}`
  });
};

export const updatePhoto = (photo) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/photos/${photo.id}`,
    data: {photo}
  });
};
