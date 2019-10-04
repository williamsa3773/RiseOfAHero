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

ActiveRecord::Schema.define(version: 2019_10_04_154546) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.integer "level"
    t.integer "exp"
    t.integer "str"
    t.integer "dex"
    t.integer "cha"
    t.integer "def"
    t.integer "kno"
    t.bigint "inventory_id", null: false
    t.string "img"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["inventory_id"], name: "index_characters_on_inventory_id"
  end

  create_table "inventories", force: :cascade do |t|
    t.integer "gold"
    t.string "name"
    t.float "dmg_mod"
    t.float "def_mod"
    t.string "spec_attribute"
    t.float "cost"
    t.boolean "isweapon"
    t.boolean "isarmor"
    t.boolean "isitem"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password"
    t.bigint "characters_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["characters_id"], name: "index_users_on_characters_id"
  end

  add_foreign_key "characters", "inventories"
  add_foreign_key "users", "characters", column: "characters_id"
end
