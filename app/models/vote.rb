class Vote < ApplicationRecord
  belongs_to :voteable, polymorphic: true
  belongs_to :movie
  belongs_to :comment
  belongs_to :review

  validates :user_id, :voteable_type, :voteable_id, presence: true
end
