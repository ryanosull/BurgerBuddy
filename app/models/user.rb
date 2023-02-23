class User < ApplicationRecord

    has_many :reviews
    has_many :burgers, through: :reviews
    has_many :restaurants, through: :burgers

    has_secure_password

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :password, presence: true, length: {minimum: 5, maximum:20}












    #
end
