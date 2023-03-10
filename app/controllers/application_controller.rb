class ApplicationController < ActionController::API
    include ActionController::Cookies

    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end

    before_action :authorized_user

    def current_user
        user = User.find_by(id: session[:user_id])
        user
    end

    def authorized_user
        render json: {errors: ["Not authorized (yes, you)!"]}, status: :unauthorized unless current_user
    end



    #
end
