class AddUserIdToHeros < ActiveRecord::Migration[6.0]
  def change
    add_reference :heros, :user, null: false, foreign_key: true
  end
end
