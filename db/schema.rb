# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_23_213454) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "burgers", force: :cascade do |t|
    t.string "bun"
    t.string "protein"
    t.string "cheese"
    t.string "veggies"
    t.string "condiments"
    t.string "extras"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "state_abbr"
    t.string "zip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "burger_id", null: false
    t.text "content"
    t.integer "rating"
    t.float "price"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["burger_id"], name: "index_reviews_on_burger_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "reviews", "burgers"
  add_foreign_key "reviews", "users"
end
