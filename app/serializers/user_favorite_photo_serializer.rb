class UserFavoritePhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :photographer_name
  
  # has_one :photo
end
