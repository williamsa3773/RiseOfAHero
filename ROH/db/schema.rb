# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_08_161458) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "heros", force: :cascade do |t|
    t.bigint "images_id"
    t.integer "level"
    t.integer "exp"
    t.integer "str"
    t.integer "dex"
    t.integer "kno"
    t.integer "cha"
    t.integer "vit"
    t.integer "def"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.integer "skill_point"
    t.string "name"
    t.index ["images_id"], name: "index_heros_on_images_id"
    t.index ["user_id"], name: "index_heros_on_user_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "heros", "users"
end
