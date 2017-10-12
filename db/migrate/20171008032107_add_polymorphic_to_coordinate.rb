class AddPolymorphicToCoordinate < ActiveRecord::Migration[5.1]
  def change
    add_column :coordinates, :locatable_id, :integer
    add_column :coordinates, :locatable_type, :string
    add_index :coordinates, [:locatable_id, :locatable_type]
  end
end
