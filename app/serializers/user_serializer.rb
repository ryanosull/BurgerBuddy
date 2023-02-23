class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email

  has_many :reviews
  has_many :burgers
  has_many :restaurants
end
