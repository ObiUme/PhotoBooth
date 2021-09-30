class UserFavoritePhotosController < ApplicationController
    wrap_parameters format: []

    def index
        photos = UserFavoritePhoto.all
        render json: photos
    end

    def create
        user = User.find_by(id: session[:user_id])
        photo = user.user_favorite_photos.create!(user_favorite_photo_params)
        render json: photo, status: :created
    end

    def update
        photo = UserFavoritePhoto.find(params[:id])
        photo.update!(user_favorite_photo_params)
        render json: photo, status: :accepted
    end

    def show
        photo = UserFavoritePhoto.find(params[:id])
        render json: photo
    end

    def destroy
        photo = UserFavoritePhoto.find(params[:id])
        photo.destroy
        head :no_content 
    end

    private

    def user_favorite_photo_params
        params.permit(:user_id, :photo_id, :title, :image, :description, :photographer_name )
    end

end
