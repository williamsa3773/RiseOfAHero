class CreateInventories < ActiveRecord::Migration[6.0]
  def change
    create_table :inventories do |t|
      t.integer :gold
      t.string :name
      t.float :dmg_mod
      t.float :def_mod
      t.string :spec_attribute
      t.float :cost
      t.boolean :isweapon
      t.boolean :isarmor
      t.boolean :isitem

      t.timestamps
    end
  end
end
