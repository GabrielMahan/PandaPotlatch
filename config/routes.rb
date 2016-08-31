Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users, :controllers => { registrations: 'registrations' }
  root to: 'application#index'
  get '/favorites', to: 'movies#favorites'

  get '/movies/:id/reviews', to: 'movies#reviews'

  resources :movies, only: [:index, :show]

  get 'all_movies' => 'movies#get_movies'
  get 'movies/:id/descriptions' => 'movies#descriptions'

end
