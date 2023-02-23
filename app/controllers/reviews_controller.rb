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

    def create #no good
        review = Review.create!(review_params)
        if review
            render json: review, status: :created
        else
            review_not_created (review)
        end
    end

    # def update
    
    # end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            render json: {messages: ["Review #{review.id} has been deleted!"]}
        else
            render json: {errors: ["Can't delete a review that doesn't exist!"]}
        end
    end



    private

    def review_not_found
        render json: {errors: ['If no news is good news, is no reviews good reviews?']}
    end

    def review_params
        params.require(:review).permit(:content, :rating, :price, :image)
    end

    def review_not_created (review)
        render json: {errors: review.errors.full_messages}, status: 422
    end


    #
end
