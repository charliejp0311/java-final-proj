class CreateDiscoveries < ActiveRecord::Migration[6.0]
  def change
    create_table :discoveries do |t|
      t.integer :user_id
      t.integer :dock_id
      t.integer :door_range_id
      t.string :door_range_update
      t.integer :door_id
      t.string :door_update

      t.timestamps
    end
  end
end
