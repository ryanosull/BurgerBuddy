class ReviewsController < ApplicationController


    def index 
        reviews = Review.all
        render json: reviews, except: [:created_at, :updated_at], status: :ok
    end

    def show 
        review = Review.find_by(id: params[:id])
        if review
            render json: review.to_json(except: [:created_at, :updated_at]), status: :ok
        else
            review_not_found
        end
    end

    def create 
        
    end




    private

    def review_not_found
        render json: {errors: ['If no news is good news, is no reviews good reviews?']}
    end



    #
end
