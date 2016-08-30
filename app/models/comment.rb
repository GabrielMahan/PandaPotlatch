class Comment < ApplicationRecord

belongs_to :commentable, polymorphic: true
has_many :votes, as: :voteable

validates :body, :user_id, :commentable_type, :commentable_id, presence: true

end
