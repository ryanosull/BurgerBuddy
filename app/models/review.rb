class Review < ApplicationRecord
  belongs_to :user
  belongs_to :burger

  validates :content, presence: true
  validates :rating, presence: true
  validates :price, presence: true










  #
end
