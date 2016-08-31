class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # before_action :authenticate_user!

  def index
  end


  def favorites
    if request.xhr?
      return render json: Movie.where.not(img_src: 'N/A')[0..8]
    end
  end


  def reviews
    if request.xhr?
      return render json: Movie.find(params['id'].to_i).reviews
    end
  end

end
