class UsersController < ApplicationController

    skip_before_action :authorized_user, only: [:create]
    wrap_parameters format: []

    # def index
    #     users = User.all
    #     render json: users, status: :ok
    # end

    def show
        current_user = User.find(session[:user_id])
        # user = User.find(params[:id])
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

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # def login
    #     user = User.find_by(email: params[:email])
    #     if user && user.authenticate(params[:password])
    #         render json: user, status: :ok
    #     else
    #         render json: {errors: ['Incorrect email or password.']}, status: :unauthorized
    #     end
    # end

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
        params.permit(:first_name, :last_name, :email, :password) # :password_confirmation ?
    end

    def user_not_found
        render json: {errors: ["User doesn't exist!"]}
    end
















    #
end
