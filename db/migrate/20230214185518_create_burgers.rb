class CreateBurgers < ActiveRecord::Migration[7.0]
  def change
    create_table :burgers do |t|
      t.string :bun
      t.string :protein
      t.string :cheese
      t.string :veggies
      t.string :condiments
      t.string :extras

      t.timestamps
    end
  end
end
