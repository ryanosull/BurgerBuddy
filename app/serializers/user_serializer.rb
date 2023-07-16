class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest #7/20 good - still unknown of pw_conf necessary at this pont

  has_many :reviews
  has_many :burgers
  has_many :restaurants
end
