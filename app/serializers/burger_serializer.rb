class BurgerSerializer < ActiveModel::Serializer
  attributes :id, :bun, :protein, :cheese, :veggies, :condiments, :extras, :restaurant_id

  belongs_to :restaurant
end
