class CreateDocks < ActiveRecord::Migration[6.0]
  def change
    create_table :docks do |t|
      t.string :section

      t.timestamps
    end
  end
end
