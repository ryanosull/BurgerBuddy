class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end



    private
    
    def user_params #come back!
        params.permit(:first_name, :last_name, :email, :password)
    end


















    #
end
