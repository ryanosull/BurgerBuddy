class ApplicationController < ActionController::API
    include ActionController::Cookies

    # before_action :authorized_user

    # def current_user
    #     user = User.find_by(id: session[:user_id])
    #     user
    # end

    def current_user
        auth_token = request.headers['auth-token'] #do not use underscore @ 'auth-token'
        if auth_token and auth_token != 'undefined'
            token = JWT.decode(auth_token, ENV['JWT_TOKEN'])[0] #pull out array
            return User.find_by( id: token['user'])
        else
            return nil
        end
    end

    # def authorized_user
    #     unless current_user
    #         render json: {errors: ["🛑 You must be logged in to do that! 🚫"]}, status: :unauthorized
    #     end
    # end



    #
end
