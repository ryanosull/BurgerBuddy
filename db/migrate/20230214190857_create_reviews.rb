class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :burger, null: false, foreign_key: true
      t.text :content
      t.integer :rating
      t.decimal :price
      t.string :image

      t.timestamps
    end
  end
end
