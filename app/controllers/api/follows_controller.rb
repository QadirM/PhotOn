class Api::FollowsController < ApplicationController

  def index
    @follow_ids = current_user.followee_ids
    render json: @follow_ids
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(follower_id: current_user.id,
      following_id: follow_params[:following_id])
    @follow.destroy
    render json: @follow
  end

  private

  def follow_params
    params.require(:follow).permit(:following_id)
  end
end
