class SessionsController < ApplicationController

    skip_before_action :authorized_user, only: [:create] 
    #keep this one ^

    # def create
    #     user = User.find_by(email: params[:email])
    #     if user&.authenticate(params[:password])
    #         session[:user_id] = user.id
    #         render json: user, status: :created
    #     else
    #         render json: {errors: ["Incorrect email or password!"]}, status: :unauthorized
    #     end
    # end

    def create 
        @user = User.find_by(email: params[:email])
        if @user and @user.authenticate(params[:password])
            logged_user = JWT.encode({user: @user.id}, ENV['JWT_TOKEN'])
            render json: {uid: logged_user}, status: :ok
        else
            render json: {errors: ["Incorrect email and/or password!"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end










    #
end
