class Burger < ApplicationRecord

    has_many :reviews
    has_many :restaurants
    has_many :users, through: :reviews
    has_many :users, through: :restaurants
    # has_one :restaurant

    validates :protein, presence: true







end
