Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  root to: 'application#index'
  get '/favorites', to: 'movies#favorites'

  get '/movies/:id/reviews', to: 'movies#reviews'
  resources :votes, only: [:create, :index]
  resources :movies, only: [:index, :show]

  get 'all_movies' => 'movies#get_movies'

  get 'votes/upvote' => 'movies#upvote'
  get 'votes/downvote' => 'movies#downvote'


end
