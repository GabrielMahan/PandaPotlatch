class VotesController < ApplicationController

before_action :data, only:[:index]

  def index
    if params[:movie]
      movie = params[:movie]
      value = movie.vote_value
      render json: value
    elsif params[:comment]
      comment = params[:comment]
      value = comment.vote_value
      render json: value
    else params[:review]
      review = params[:review]
      value = review.vote_value
      render json: value
    end
  end

  def create
  end

private
  def data
    params.permit(:movie)
    params.permit(:comment)
    params.permit(:review)
  end

  def upvotes

  end

  def downvotes

  end

  def vote_value
    up = self.votes.where(up?: true).count
    down = self.votes.where(up?: false).count
    return up-down
  end
end
