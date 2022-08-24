Rails.application.routes.draw do
  resources :books
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/hello', to: 'application#hello_world'
  post '/login', to: 'sessions#create'
  post "/signup", to: "users#create"
  # Defines the root path route ("/")
  # root "articles#index"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

      
end
