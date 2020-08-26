class CreateOutbounds < ActiveRecord::Migration[6.0]
  def change
    create_table :outbounds do |t|
      t.integer :door_id
      t.integer :user_id
      t.boolean :used
      t.boolean :available
      t.integer :last_updated_by

      t.timestamps
    end
  end
end
