Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:new, :create, :show, :update]
    resources :events, only: [:index, :show, :create, :update, :destroy]
  end
end
