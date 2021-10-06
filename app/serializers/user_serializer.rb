class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :is_photographer, :avatar
  has_many :photos
  has_many :user_favorite_photos
  # has_many :schedules
end
