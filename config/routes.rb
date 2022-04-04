Rails.application.routes.draw do
  devise_for :users,
  # overwriting devise controllers with user controllers we created
              controllers: {
                sessions: 'users/sessions',
                registrations: 'users/registrations'
              }
  get '/member-data', to: 'members#show'

  namespace :api do
    namespace :v1 do
      resources :projects, :bugs      
    end
  end
end
