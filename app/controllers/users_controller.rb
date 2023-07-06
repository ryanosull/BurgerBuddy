class UsersController < ApplicationController


    before_action :authorize!, only: [:update, :destroy]
    skip_before_action :authorize!, only: [:create]
    wrap_parameters format: [] #should this belong in ApplicationController?

    # def index
    #     users = User.all
    #     render json: users, status: :ok
    # end

    def show
        current_user = User.find(session[:user_id])
        user = User.find(params[:id])
        render json: current_user, status: :ok #user
    end

    # def show
    #     user = User.find_by(id: params[:id])
    #     if user
    #         render json: user.to_json(except: [:created_at, :updated_at, :password_digest]), status: :ok
    #     else
    #         user_not_found
    #     end
    # end

    def create ###good to go
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created #201
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update(user_params)
            render json: user
        else
            render json: {errors: ["User does not exist!"]}
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            render json: {messages: ["User #{user.first_name} #{user.last_name} has been deleted"]}
        else 
            render json: {errors: ["User does not exist!"]}
        end
    end


    private
    
    def user_params #come back!
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

    #why not this?:
    # def user_params
    #     params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    #   end


    def user_not_found
        render json: {errors: ["User does not exist!"]}
    end
















    #
end
