class CreateDoors < ActiveRecord::Migration[6.0]
  def change
    create_table :doors do |t|
      t.string :number
      t.boolean :serviceable
      t.boolean :in
      t.boolean :out
      t.boolean :stage
      t.string :service_comments

      t.timestamps
    end
  end
end
