class BurgersController < ApplicationController

    def index #good
        burgers = Burger.all
        render json: burgers, except: [:created_at, :updated_at], status: :ok
    end

    def show #good
        burger = Burger.find_by(id: params[:id])
        if burger
            render json: burger.to_json(except: [:created_at, :updated_at], include: [:restaurants => {except: [:created_at, :updated_at]}]), status: :ok
        else
            burger_not_found
        end
    end

    def create #good
        burger = Burger.create!(burger_params)
        if burger
            render json: burger, status: :created
        else
            burger_not_created (burger)
        end
    end

    def update #good
        burger = Burger.find_by(id: params[:id])
        if burger
            burger.update(burger_params)
            render json: burger
        else
            render json: {errors: ["Burger not found, buddy!"]}
        end
    end


    def destroy #good
        burger = Burger.find_by(id: params[:id])
        if burger
            burger.destroy
            render json: {messages: ["Burger #{burger.id} has been deleted!"]}
        else 
            render json: {errors: ["Burger not found, buddy!"]}
        end
    end



    private

    def burger_not_found
        render json: {errors: ['Oh no buddy, that burger is neither here nor there...🍽']}
    end

    def burger_params
        params.require(:burger).permit(:bun, :protein, :cheese, :veggies, :condiments, :extras )
    end

    def burger_not_created (burger)
        render json: {errors: burger.errors.full_messages}, status: 422
    end




    #
end
