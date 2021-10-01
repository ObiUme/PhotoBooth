class Photo < ApplicationRecord
  belongs_to :user
  has_many :user_favorite_photos, dependent: :destroy
  has_many :users, through: :user_favorite_photos
end
