class CreateUserFavoritePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :user_favorite_photos do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :photo, null: false, foreign_key: true
      t.string :title
      t.string :image
      t.string :description 
      t.string :photographer_name
      t.timestamps
    end
  end
end
