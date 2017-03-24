Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    get '/photos/discover', to: 'photos#discover'
    get '/users/:id/photos', to: 'photos#index_others'
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :show, :create, :update, :destroy]
    resources :follows, only: [:index, :create, :destroy]
  end
  root "static_pages#root"
end
