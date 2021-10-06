class Photo < ApplicationRecord
  belongs_to :user
  has_many :user_favorite_photos, dependent: :destroy
  has_many :users, through: :user_favorite_photos

  has_many :comments
  has_many :users, through: :comments
  
end
