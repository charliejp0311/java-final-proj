class CreateDiscoveries < ActiveRecord::Migration[6.0]
  def change
    create_table :discoveries do |t|
      # t.integer :user_id
      t.integer :dock_id
      t.integer :door_range_id
      t.integer :door_id
      t.boolean :racks, default: false
      t.boolean :stage, default: false
      t.boolean :inbound_present, default: false
      t.boolean :inbound_available, default: false
      t.boolean :outbound_present, default: false
      t.boolean :outbound_available, default: false
      t.boolean :serviceable, default: true
      t.string :service_comments, default: ""

      t.timestamps
    end
  end
end
