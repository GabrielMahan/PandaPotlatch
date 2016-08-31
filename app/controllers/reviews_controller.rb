class ReviewsController < ApplicationController

  def show
    review = Review.find(params[:id])
    @review_json = review.to_json
  end

  def create
    binding.pry
    review = Review.new(params[:review])
    if review.save
      return render json: review
    else
      return {error: 'you messed up'}
    end
  end

end
