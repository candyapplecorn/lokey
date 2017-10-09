class AddPolymorphismToActivities < ActiveRecord::Migration[5.1]
  def change
    add_column :activities, :act_type_id, :integer
    add_column :activities, :act_type_type, :string
    add_index :activities, [:act_type_id, :act_type_type]
  end
end
