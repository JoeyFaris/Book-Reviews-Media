class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :amazon_url, :img_url
end
