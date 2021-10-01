class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :is_photographer
  has_many :photos
  has_many :user_favorite_photos
end
