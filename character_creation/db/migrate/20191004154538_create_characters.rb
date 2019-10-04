class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.integer :level
      t.integer :exp
      t.integer :str
      t.integer :dex
      t.integer :cha
      t.integer :def
      t.integer :kno
      t.references :inventory, null: false, foreign_key: true
      t.string :img

      t.timestamps
    end
  end
end
