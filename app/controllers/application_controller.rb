class ApplicationController < ActionController::API
    # include ActionController::Cookies

    def current_user
        auth_token = request.headers['auth-token'] #do not use underscore @ 'auth-token'
        if auth_token and auth_token != 'undefined'
            token = JWT.decode(auth_token, ENV['JWT_TOKEN'])[0] #pull out array
            return User.find_by( id: token['user']) #'user' from sessions_controller/#create
        else
            return nil #maybe raise an error here
        end
    end

    def authorize! #this was called authorized_user previously
        unless current_user
            render json: {errors: ["🛑 You must be logged in to do that! 🚫"]}, status: :unauthorized #401
        end
    end


    #
end
