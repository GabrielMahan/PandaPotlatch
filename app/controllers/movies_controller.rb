require 'pry'
class MoviesController < ApplicationController

  def index
  end

  def get_movies
    movies = Movie.all
    render json: movies

  end

  def show
  end
end
