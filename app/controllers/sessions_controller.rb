class SessionsController < ApplicationController

    # keep this one ↓ not so sure...
    # skip_before_action :authorized_user, only: [:create] 
    # skip_before_action :authorize!, only: [:create] 

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
            logged_user = JWT.encode({user: @user.id}, ENV['JWT_TOKEN']) # 'user' for app_controller/#current_user
            # user = {id: @user.id, uid: logged_user}
            render json: {uid: logged_user}, status: :ok #200
        else
            cannot_login
        end
    end

    # def auto_login
    #     auth_token = request.headers['auth-token'] #do not use underscore @ 'auth-token'
    #     if auth_token and auth_token != 'undefined'
    #         token = JWT.decode(auth_token, ENV['JWT_TOKEN'])[0] #pull out from array
    #         user = User.find_by( id: token['user'])
    #         render json: user.id, status: :ok
    #     else
    #         cannot_login
    #     end
    # end

    # def destroy
    #     session.delete :user_id
    #     head :no_content
    # end



    private

    def cannot_login
        render json: {errors: ["You have entered an invalid username and/or password!"]}, status: :unauthorized #401
    end




    #
end
