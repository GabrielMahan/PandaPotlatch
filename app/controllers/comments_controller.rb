class CommentsController < ApplicationController

  def show
    case params[:type]
    when "movies"
      return render json: Movie.find(params[:id]).comments
    when "reviews"
      return render json: Review.find(params[:id]).comments
    when "users"
      return render json: User.find(params[:id]).comments
    end
  end

  def create
    # binding.pry
    new_comment = Comment.new(
      body: params[:comment][:body],
      commentable_type: params[:comment][:commentable_type],
      commentable_id: params[:comment][:commentable_id]
      )

    # binding.pry
    new_comment.commentable_type = new_comment.commentable_type.capitalize
    if current_user
      new_comment.user_id = current_user.id
    else
      new_comment.user_id = 3
    end

    if new_comment.save
      return render json: new_comment
    else
      return {error: 'you messed up'}
    end
  end
end
