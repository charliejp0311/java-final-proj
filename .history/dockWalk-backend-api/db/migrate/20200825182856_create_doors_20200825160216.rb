class CreateDoors < ActiveRecord::Migration[6.0]
  def change
    create_table :doors do |t|
      t.string :number
      t.integer :door_range_id
      t.boolean :serviceable, default: true
      t.boolean :in, default: false
      t.boolean :out, default: false
      t.boolean :stage, default: false
      t.string :service_comments
      t.integer :inbound_id, default: null
      t.integer :outbound_id, default: null

      t.timestamps
    end
  end
end
