class ReviewsController < ApplicationController

  def show
    review = Review.find(params[:id])
    @review_json = review.to_json
  end

end
