class AddColumnToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :heros, null: false, foreign_key: true
  end
end
