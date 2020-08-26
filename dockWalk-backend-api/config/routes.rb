Rails.application.routes.draw do
  get 'door/index'
  get 'door/show'
  get 'door/edit'
  get 'door/create'
  get 'door/destroy'
  get 'door_ranges/index'
  get 'door_ranges/show'
  get 'docks/index'
  get 'docks/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
