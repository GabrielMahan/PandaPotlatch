class ReviewsController < ApplicationController

  def show
    review = Review.find(params[:id])
    @review_json = review.to_json
  end

  def create
    review = Review.new(title: params[:review][:title],
      tomato_score: params[:review][:tomato_score],
      body: params[:review][:body], critic_id: current_user.id, movie_id: params[:movie_id] )
    if review.save
      return render json: review
    else
      return {error: 'you messed up'}
    end
  end

end
