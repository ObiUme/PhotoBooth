class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :shoot_description, :length, :email, :consultation, :name, :artist_name, :client_id, :photographer_id
  
end
