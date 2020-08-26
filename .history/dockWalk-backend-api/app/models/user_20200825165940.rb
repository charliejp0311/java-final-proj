class User < ApplicationRecord
    has_secure_password
    has_many :inbounds
    has_many :outbounds
    validates :name, presence: true
    validates :password, presence: true 
end
