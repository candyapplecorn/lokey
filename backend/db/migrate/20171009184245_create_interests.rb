class CreateInterests < ActiveRecord::Migration[5.1]
  def change
    create_table :interests do |t|
      t.integer :user_id
      t.integer :activity_id
      t.timestamps
    end
    add_index :interests, [:user_id, :activity_id]
  end
end
