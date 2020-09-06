Rails.application.routes.draw do

  resources :discoveries
  resources :docks, only: [:index, :show]
  resources :door_ranges, only: [:index, :show, :update]
  resources :doors, only: [:index, :show]
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
