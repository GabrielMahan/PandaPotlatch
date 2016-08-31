Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users, :controllers => { registrations: 'registrations' }
  root to: 'application#index'
  get '/favorites', to: 'movies#favorites'

  get '/movies/:id/reviews', to: 'movies#reviews'
  resources :votes, only: [:create, :index]
  resources :movies, only: [:index, :show] do
    get '/reviews/:id', to: 'reviews#show'
  end

  get 'all_movies' => 'movies#get_movies'

  post 'votes/upvote' => 'votes#upvote'
  post 'votes/downvote' => 'votes#downvote'

  get '/:type/:id/comments', to: 'comments#show'
  post '/comments', to: "comments#create"

end
