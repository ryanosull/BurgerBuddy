class UsersController < ApplicationController

    skip_before_action :authorized_user, only: [:create]

    def show
        # user = User.find(session[:user_id])
        # user = User.find(params[:id])
        render json: current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def login
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            render json: user, status: :ok
        else
            render json: {errors: ['Incorrect email or password']}, status: :unauthorized
        end
    end


    private
    
    def user_params #come back!
        params.permit(:first_name, :last_name, :email, :password)
    end


















    #
end
