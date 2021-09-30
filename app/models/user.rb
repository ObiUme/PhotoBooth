class User < ApplicationRecord
    has_secure_password
    has_many :photos
    has_many :user_favorite_photos
    has_many :photos, through: :user_favorite_photos, dependent: :destroy
    has_one :appointment
end
