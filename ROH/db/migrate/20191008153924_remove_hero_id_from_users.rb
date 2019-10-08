class RemoveHeroIdFromUsers < ActiveRecord::Migration[6.0]
  def change

    remove_column :users, :heros_id, :string
  end
end
