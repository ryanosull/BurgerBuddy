class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :burger, null: false, foreign_key: true
      t.string :name
      t.string :address
      t.string :city
      t.string :state_abbr
      t.string :zip

      t.timestamps
    end
  end
end
