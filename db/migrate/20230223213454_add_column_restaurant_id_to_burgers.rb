class AddColumnRestaurantIdToBurgers < ActiveRecord::Migration[7.0]
  def change
    add_column :burgers, :restaurant_id, :integer
  end
end
