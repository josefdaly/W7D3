Rails.application.routes.draw do
  root 'roots#root'
  resources :posts, only: [:create]
end
