
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
  end


  def favorites
    if request.xhr?
      movies = render json: Movie.all[0..5]
      # binding.pry
      return movies
    end
  end


  def reviews
    if request.xhr?
      return render json: Movie.find(params['id'].to_i).reviews
    end
  end

end
