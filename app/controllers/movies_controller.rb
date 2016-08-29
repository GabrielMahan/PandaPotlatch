class MoviesController < ApplicationController

  def index
    movies = Movie.all
    respond_to do |format|
      format.html
      format.json { render json: movies }
      binding.pry
    end
  end

  def show
  end
end
