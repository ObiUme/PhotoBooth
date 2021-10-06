class AddPhotographerToSchedule < ActiveRecord::Migration[6.1]
  def change
    add_column :schedules, :artist_name, :string
  end
end
