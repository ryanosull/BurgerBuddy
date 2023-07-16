class UsersController < ApplicationController


    before_action :authorize!, only: [:show, :update, :destroy]  #keep me here! OK // 7/20 - delete now works that i have taken :destroy out of here - why is this?
    # skip_before_action :authorize!, only: [:create] - probably ok
    wrap_parameters format: [] #should this belong in ApplicationController?

    def index     #7/20 determining if necessary - leaving on for Postman
        users = User.all
        render json: users, status: :ok
    end





    # def show #7/20 maybe come back and restrict pw_dig
    #     user = User.find_by(id: params[:id]) #(session[:user_id]) 7/20
    #     if user
    #         render json: user, status: :ok #user
    #     else
    #         user_not_found #7/20 working as intended
    #     end
    # end




    # def show
    #     auth_token = request.headers['auth-token'] #DO NOT use 'auth_token' - NO UNDERSCORE
    #     user = User.find_by(id: params[:id])
    #     if auth_token and auth_token != 'undefined'
    #         token = JWT.decode(auth_token, ENV['JWT_TOKEN'])[0] #pull first item from array
    #         return user #User.find_by(id: token['user'])
    #     else
    #         return user_not_found
    #     end
    # end

    # def show
    #     if current_user
    #         user = User.find_by(id: params[:id])
    #         render json: user
    #     else
    #         user_not_found
    #     end
    # end



    def show
        user = User.find_by(id: params[:id])
      
        if user && current_user && current_user.id == user.id
          render json: user
        else
          user_not_found
        end
      end
      






    def create # 7/20 good to go
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created #201
    end

    def update # 7/20 good to go with auth-token 
        user = User.find_by(id: params[:id])
        if user
            user.update(user_params)
            render json: user, status: :ok #200
        else
            render json: {errors: ["User does not exist!"]} #should render authorize!
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
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation) #do not use :password_digest for :password 7/20
    end

    #why not this?:
    # def user_params
    #     params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    # end


    def user_not_found
        render json: {errors: ["User not found! ⚆_⚆"]}
    end


#end
end
