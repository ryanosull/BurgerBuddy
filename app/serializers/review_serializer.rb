class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :price, :image

  has_one :user
  has_one :burger
  
  #
end
