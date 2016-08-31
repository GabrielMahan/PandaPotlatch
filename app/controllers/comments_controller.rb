class CommentsController < ApplicationController

  def show
    case params[:type]
    when "movies"
      return render json: Movie.find(params[:id]).comments
    when "reviews"
      return render json: Review.find(params[:id]).comments
    when "users"
      return render json: User.find(params[:id]).comments
    end
  end

end
