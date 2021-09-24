class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :photographer_name, :photo_data
  has_one :user


  def photo_data
    rails_blob_path(object.photo_data, only_path: true) if object.photo_data.attached?
  end

end
