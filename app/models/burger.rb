class Burger < ApplicationRecord

    has_many :reviews
    has_many :users, through: :reviews
    belongs_to :restaurant


    validates :protein, presence: true







end
