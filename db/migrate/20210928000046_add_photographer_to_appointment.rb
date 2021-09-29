class AddPhotographerToAppointment < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :photographer, :string
  end
end
