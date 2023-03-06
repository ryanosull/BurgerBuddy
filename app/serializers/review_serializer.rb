class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :price, :image
  has_one :user
  has_one :burger
  #would like to get associated restaurant back as well. 



end
