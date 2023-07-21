class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email #7/20 good - still unknown of pw_conf necessary at this pont

  #7/21 removed :pw_digest from attributes for use in SHOW. not sure yet if this necessary for user to change their password.

  has_many :reviews
  has_many :burgers
  has_many :restaurants
end
