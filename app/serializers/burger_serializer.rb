class BurgerSerializer < ActiveModel::Serializer
  attributes :id, :bun, :protein, :cheese, :veggies, :condiments, :extras
end
