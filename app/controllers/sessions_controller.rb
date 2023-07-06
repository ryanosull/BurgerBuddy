class SessionsController < ApplicationController


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

    def auto_login
        auth_token = request.headers['auth-token'] #do not use underscore @ 'auth-token'
        if auth_token and auth_token != 'undefined'
            token = JWT.decode(auth_token, ENV['JWT_TOKEN'])[0] #pull out array
            user = User.find_by( id: token['user']) #'user' from sessions_controller/#create
            render json: user.id, status: :ok #200
        else
            cannot_login
        end
    end

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
