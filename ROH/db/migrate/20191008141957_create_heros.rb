class CreateHeros < ActiveRecord::Migration[6.0]
  def change
    create_table :heros do |t|
      t.references :images
      t.integer :level
      t.integer :exp
      t.integer :str
      t.integer :dex
      t.integer :kno
      t.integer :cha
      t.integer :vit
      t.integer :def

      t.timestamps
    end
  end
end
