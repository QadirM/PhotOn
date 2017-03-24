class Api::PhotosController < ApplicationController

  before_action :require_logged_in

  def index
    @photos = []
    current_user.followees.each do |user|
      @photos.concat(user.photos)
    end

    @photos
    render "api/photos/index"
  end

  def discover
    all_photos = Photo.all
    followed_photos = [];
    current_user.followees.each do |user|
      followed_photos.concat(user.photos)
    end
    followed_photos.concat(current_user.photos)

    @photos = all_photos.reject{|photo| followed_photos.include?(photo)}
    render "api/photos/index"
  end


  def index_others
    user = User.find(params[:id])
    @photos = user.photos
    render "api/photos/index"
  end

  def show
    @photo = Photo.find(params[:id])
    render "api/photos/show"
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render "api/photos/show"
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :url, :description)
  end

end
