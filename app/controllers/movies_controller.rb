
class MoviesController < ApplicationController

  def index
  end

  def get_movies
    movies = Movie.all
    render json: movies

  end

  def show
    movie = Movie.find(params[:id])
    @movie_json = movie.to_json
  end

  def descriptions
    movie = Movie.find(params[:id])
    @movie_desc = movie.to_json
  end



end
