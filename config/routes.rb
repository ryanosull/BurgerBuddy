Rails.application.routes.draw do
  resources :restaurants, only: [:index, :show, :create, :update, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :burgers, only: [:index, :show, :create, :update, :destroy] #index, show, create, update, 

  # resources :users, only: [:show, :create, :update, :destroy]
  resources :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'

  # get '/authorized', to: 'users#show'
  # post '/auto_login', to: 'sessions#auto_login'
  # delete '/logout', to: 'sessions#destroy' 


end
