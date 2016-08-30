Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#index'
  get '/favorites', to: 'movies#favorites'

  get '/movies/:id/reviews', to: 'movies#reviews'

end
