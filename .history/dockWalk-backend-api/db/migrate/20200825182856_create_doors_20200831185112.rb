class CreateDoors < ActiveRecord::Migration[6.0]
  def change
    create_table :doors do |t|
      t.string :number
      t.integer :door_range_id
      t.boolean :stage, default: true
      t.boolean :inbound_present, default: true
      t.boolean :inbound_available, default: true
      t.boolean :outbound_present, default: true
      t.boolean :outbound_available, default: true
      t.boolean :serviceable, default: true
      t.string :service_comments, default: ""

      t.timestamps
    end
  end
end
