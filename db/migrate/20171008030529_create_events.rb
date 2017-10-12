class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :host_id
      t.integer :activity_id
      t.text :description

      t.timestamps
    end
  end
end
