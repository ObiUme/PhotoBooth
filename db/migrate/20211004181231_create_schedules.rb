class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.string :shoot_description
      t.integer :length
      t.string :email
      t.datetime :consultation
      t.string :name
      t.integer :photographer_id, foreign_key: true
      t.integer :client_id, foreign_key: true

      t.timestamps
    end
  end
end
