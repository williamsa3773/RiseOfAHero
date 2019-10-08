class AddColumnToHeros < ActiveRecord::Migration[6.0]
  def change
    add_column :heros, :name, :string
  end
end
