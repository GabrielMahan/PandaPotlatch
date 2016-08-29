class Movie < ApplicationRecord

  validates :title, presence: true
  belongs_to :director, class_name: "User"
  has_many :reviews
  has_many :comments, as: :commentable
  has_many :reviewers, through: :reviews, source: :user
  has_many :votes, as: :voteable
  has_many :fans, through: votes: -> { where(up?: true) }, source: :user

end
