class User < ApplicationRecord
    has_secure_password
    has_many :photos
    has_many :user_favorite_photos
    has_many :photos, through: :user_favorite_photos, dependent: :destroy


    has_many :clients, foreign_key: :client_id, class_name: 'Schedule'
    has_many :photographers, through: :clients

    has_many :photographers, foreign_key: :photographer_id, class_name: 'Schedule'
    has_many :clients, through: :photographers

    has_many :comments
    has_many :photos, through: :comments 

    def self.photographers
        User.all.where(is_photographer: true)
    end

end
