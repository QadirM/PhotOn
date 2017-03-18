@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :url, :description, :user_id
    json.username photo.user.username
    json.profile_photo photo.user.profile_url
  end
end
