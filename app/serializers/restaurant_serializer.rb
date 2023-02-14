class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state_abbr, :zip
  has_one :user
  has_one :burger
end
