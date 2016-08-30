class Review < ApplicationRecord

  belongs_to :critic, class_name: "User", foreign_key: :critic_id
  belongs_to :movie
  has_many :comments, as: :commentable
  has_many :votes, as: :voteable

  validates :title, :tomato_score, :body, :movie_id, :critic_id, presence: true
end
