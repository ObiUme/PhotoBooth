class PhotosController < ApplicationController

    def index
        render json: Photo.all
    end

    def create
        photo = @current_user.photo.create!(photo_params)
        render json: photo, status: :created 
    end

    def show
        
    end



    private

    def photo_params
        params.permit(:title, :image, :description, :photographer_name, :photo_data)
    end
end
