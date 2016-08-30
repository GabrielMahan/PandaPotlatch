class Vote < ApplicationRecord
  belongs_to :voteable, polymorphic: true


  validates :user_id, :voteable_type, :voteable_id, presence: true
end
