class CreateDoorRanges < ActiveRecord::Migration[6.0]
  def change
    create_table :door_ranges do |t|
      t.string :range
      t.integer :dock_id
      t.boolean :racks, default: false
      t.integer :inbound_id, default: null
      t.integer :outbound_id, default: null

      t.timestamps
    end
  end
end
