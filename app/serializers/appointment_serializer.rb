class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :shoot, :length, :price
end
