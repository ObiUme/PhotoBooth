class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :photographer_name
  has_one :user

#  :photo_data
  # def photo_data
  #   rails_blob_path(object.photo_data, only_path: true) if object.photo_data.attached?
  # end

end
