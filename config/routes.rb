Rails.application.routes.draw do
  resources :appointments
  resources :photos
  resources :users
  get "/me", to: "users#show"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  default_url_options :host => "http://localhost:3000/"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
