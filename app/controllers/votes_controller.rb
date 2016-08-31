class VotesController < ApplicationController

before_action :data, only:[:index]

  def index
    if params[:movie]
      find_movie
      value = vote_value(@object)
    elsif params[:comment]
      find_comment
      value = vote_value(@object)
    else params[:review]
      find_review
      value = vote_value(@object)
    end
      return render json: value
  end

  def upvote
    if params[:movie]
      find_movie
      if find_vote(@object)
        value = vote_value(@object)
      else
        typeobj = params[:movie]
        type = "Movie"
        create_upvote(type, typeobj)
        value = vote_value(@object)
      end
    elsif params[:comment]
      find_comment
      if find_vote(@object)
        value = vote_value(@object)
      else
        typeobj = params[:comment]
        type = "Comment"
        create_upvote(type, typeobj)
        value = vote_value(@object)
      end
    else params[:review]
      find_review
      if find_vote(@object)
        value = vote_value(@object)
      else
        typeobj = params[:review]
        type = "Review"
        create_upvote(type, typeobj)
        value = vote_value(@object)
      end
    end
      return render json: value
  end

  def downvote
    if params[:movie]
      find_movie
      if find_vote(@object)
         value = vote_value(@object)
      else
          typeobj = params[:movie]
          type = "Movie"
          create_downvote(type, typeobj)
          value = vote_value(@object)
      end
    elsif params[:comment]
      find_comment
      if find_vote(@object)
        value = vote_value(@object)
      else
        type = "Comment"
        typeobj = params[:comment]
        create_downvote(type,typeobj)
        value = vote_value(@object)
      end
    else params[:review]
      find_review
      if find_vote(@object)
        value = vote_value(@object)
      else
        type = "Review"
        typeobj = params[:review]
        create_downvote(type, typeobj)
        value = vote_value(@object)
      end
    end
      return render json: value
  end

  def create
  end

private
  def data
    params.permit(:movie)
    params.permit(:comment)
    params.permit(:review)
  end

  def vote_value(voteable)
    up_count = voteable.votes.where(up?: true).length
    down_count = voteable.votes.where(up?: false).length
    return up_count - down_count
  end

  def find_movie
    @object = Movie.find(params[:movie][:id])
  end

  def find_comment
    @object = Comment.find(params[:comment][:id])
  end

  def find_review
    @object = Review.find(params[:review][:id])
  end

  def create_upvote(type, typeobj)
    Vote.create(user_id: current_user.id, up?: true, voteable_type: type, voteable_id: typeobj[:id] )
  end

  def create_downvote(type, typeobj)
    Vote.create(user_id: current_user.id, up?: false, voteable_type: type, voteable_id: typeobj[:id])
  end

  def find_vote(object)
    votes = object.votes
    return true if votes.find_by(user_id: current_user.id)
  end


end
