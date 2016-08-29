class Comment < ApplicationRecord

belongs_to :commentable, polymorphic: true
belongs_to :movie
belongs_to :review
belongs_to :user
has_many :votes, as: :voteable

validates :body, :user_id, :commentable_type, :commentable_id, presence: true

end
