class RestaurantsController < ApplicationController


    def index #good
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end



    def show #good
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant
            render json: restaurant.to_json(except: [:created_at, :updated_at]), status: :ok
        else
            restaurant_not_found
        end
    end

    def create 
        restaurant = Restaurant.create!(restaurant_params)
        if restaurant
            render json: restaurant, status: :created
        else
            restaurant_not_created (restaurant)
        end
    end

    def update
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant
            restaurant.update(restaurant_params)
            render json: restaurant
        else
            render json: {errors: ["Restaurant not found, buddy!"]}
        end
    end

    def destroy
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant
            restaurant.destroy
            render json: {messages: ["Restaurant #{restaurant.id} has been deleted!"]}
        else
            render json: {errors: ["Can't delete what's not there, bud."]}
        end
    end






    private

    def restaurant_not_found
        render json: {errors: ['Gotta go there first, buddy.']}
    end

    def restaurant_params 
        params.require(:restaurant).permit(:name, :address, :city, :state_abbr, :zip)
    end

    def restaurant_not_created (restaurant)
        render json: {errors: restaurant.errors.full_messages}, status: 422
    end



    #
end
