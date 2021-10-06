class CommentsController < ApplicationController
    def create
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    def index
        comments = Comment.all
        render json: comments
    end

    private

    def comment_params
        params.permit(:user_id, :photo_id, :content )
    end
end
