class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :title
      t.string :image
      t.string :description
      t.string :photographer_name
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
