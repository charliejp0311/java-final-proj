Rails.application.routes.draw do

  resources :docks, only: [:index, :show]
  resources :door_ranges, only: [:index, :show]
  resources :doors, only: [:index, :show]
  resources :inbounds
  resources :outbounds
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
