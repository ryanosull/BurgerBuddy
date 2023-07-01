class User < ApplicationRecord
    
    has_secure_password

    has_many :reviews , dependent: :destroy
    has_many :burgers, through: :reviews, dependent: :destroy
    has_many :restaurants, through: :burgers, dependent: :destroy

    validates :first_name, presence: true
    validates :last_name, presence: true

    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true

    PASSWORD_REQUIREMENTS = /\A 
        (?=.{8, 16}) #at least 8 characters length
        (?=.*\d) #must contain at least one number
        (?=.*[a-z]) #must contain at least one lower case letter
        (?=.*[A-Z]) #must contain at least one upper case letter
        (?=.*[[:^alnum:]]) #must contain at least one symbol
    /x

    validates :password, presence: true, length: {in: 8..16}, confirmation: {case_sensitive: true}
    validates :password_confirmation, presence: true












    #
end
