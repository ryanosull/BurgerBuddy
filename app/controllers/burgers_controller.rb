class BurgersController < ApplicationController

    def index
        burgers = Burger.all
        render json: burgers, except: [:created_at, :updated_at], status: :ok
    end

    def show
        burger = Burger.find_by(id: params[:id])
        if burger
            render json: burger.to_json(except: [:created_at, :updated_at], include: [:restaurants => {except: [:created_at, :updated_at]}]), status: :ok
        else
            burger_not_found
        end
    end

    def create
        burger = Burger.create!(burger_params)
        render json: burger, status: :created
    end

    # def update
    #     burger = Burger.find_by(:id params[:id])
    #     burger.update (burger_params)
    #     if burger.valid?
    #         render json: burger, status: :ok
    #     end
    # end

    # def destroy
    #     burger = Burger.find_by(id: params[:id])
    #     if burger
    #         burger.destroy
    #         render json: {messages: ["Burger #{burger.id} has been deleted!"]}
    #     else 
    #         render json: {errors: ["Burger not found, buddy!"]}
    #     end
    # end



    # private

    # def burger_not_found
    #     render json: {errors: ['Oh no buddy, that burger is neither here nor there...🍽']}
    # end

    # def burger_params
    #     params.require(:burger).permit(:bun, :protein, :cheese, :veggies, :condiments, :extras )
    # end

    # def burger_not_created (burger)
    #     render json: {errors: camper.errors.full_messages}, status: 422
    # end




    #
end
