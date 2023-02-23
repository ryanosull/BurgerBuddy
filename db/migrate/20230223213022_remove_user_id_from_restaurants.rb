class RemoveUserIdFromRestaurants < ActiveRecord::Migration[7.0]
  def change
    remove_columns :restaurants, :user_id, :burger_id
  end
end
