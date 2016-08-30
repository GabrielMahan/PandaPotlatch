class VotesController < ApplicationController

before_action :data, only:[:index]

  def index
    if params[:movie]
      movie = Movie.find(params[:movie][:id].to_i)
      value = vote_value(movie)
    elsif params[:comment]
      comment = Comment.find(params[:comment][:id])
      value = vote_value(comment)
      render json: value
    else params[:review]
      review = Review.find(params[:review][:id])
      value = vote_value(review)
      render json: value
    end
    return render json: value
  end

  def create
  end

private
  def data
    params.permit(:movie)
    params.permit(:comment)
    params.permit(:review)
  end

  def vote_value(voteable)
    up_count = voteable.votes.where(up?: true).length
    down_count = voteable.votes.where(up?: false).length
    return up_count - down_count
  end
end
