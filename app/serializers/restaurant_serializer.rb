class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state_abbr, :zip

  has_many :burgers
  has_many :reviews
  has_many :users
end
