class CreateDoors < ActiveRecord::Migration[6.0]
  def change
    create_table :doors do |t|
      t.string :dock
      t.string :range
      t.string :number
      t.boolean :racks, default: false
      t.boolean :serviceable, default: false
      t.string :service_comment

      t.timestamps
    end
  end
end
