class CreateDoors < ActiveRecord::Migration[6.0]
  def change
    create_table :doors do |t|
      t.string :number
      t.integer :door_range_id
      t.boolean :inbound_present
      t.boolean :inbound_available
      t.boolean :outbound_present
      t.boolean :outbound_available
      t.boolean :serviceable, default: true
      t.string :service_comments

      t.timestamps
    end
  end
end
