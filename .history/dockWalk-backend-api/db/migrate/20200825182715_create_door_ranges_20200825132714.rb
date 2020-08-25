class CreateDoorRanges < ActiveRecord::Migration[6.0]
  def change
    create_table :door_ranges do |t|
      t.string :range
      t.integer :dock_id
      t.boolean :racks

      t.timestamps
    end
  end
end
