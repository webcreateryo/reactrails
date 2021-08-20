Rails.application.routes.draw do
root to: "issues#index"


  namespace :api, { format: 'json' } do
    resources :tasks
  end
  resources :posts
  resources :issues
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
