class User < ApplicationRecord

    has_many :reviews
    has_many :restaurants
    has_many :burgers, through: :reviews
    has_many :burgers, through: :restaurants

    has_secure_password














    #
end
