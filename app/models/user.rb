class User < ApplicationRecord

    has_many :reviews , dependent: :destroy
    has_many :burgers, through: :reviews, dependent: :destroy
    has_many :restaurants, through: :burgers, dependent: :destroy

    has_secure_password

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true, length: {minimum: 5, maximum:20}












    #
end
