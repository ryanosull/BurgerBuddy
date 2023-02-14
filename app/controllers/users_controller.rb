class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
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
