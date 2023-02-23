class Restaurant < ApplicationRecord
  has_many :burgers
  has_many :reviews, through: :burgers
  has_many :users, through: :reviews

  # validates :name, presence: :true
  # validates :city, presence: :true
  # validates :state_abbr, presence: :true, length: {is: 2}
  # validates :zip, length: {is: 5}









  #
end

