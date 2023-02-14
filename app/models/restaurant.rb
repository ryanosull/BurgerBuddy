class Restaurant < ApplicationRecord
  belongs_to :user
  belongs_to :burger

  validates :name, presence: :true
  validates :city, presence: :true
  validates :state_abbr, presence: :true, length: {is: 2}
  validates :zip, length: {is: 5}









  #
end

