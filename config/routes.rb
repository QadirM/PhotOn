Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :show, :create, :update, :destroy]
    get '/users/:id/photos', to: 'photos#index_others'
  end
  root "static_pages#root"
end
