class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :username
  has_one :user
  has_one :photo
end
