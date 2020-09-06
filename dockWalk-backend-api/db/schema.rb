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

ActiveRecord::Schema.define(version: 2020_08_26_192608) do

  create_table "discoveries", force: :cascade do |t|
    t.integer "dock_id"
    t.integer "door_range_id"
    t.integer "door_id"
    t.boolean "racks", default: false
    t.boolean "stage", default: false
    t.boolean "inbound_present", default: false
    t.boolean "inbound_available", default: false
    t.boolean "outbound_present", default: false
    t.boolean "outbound_available", default: false
    t.boolean "serviceable", default: true
    t.string "service_comments", default: ""
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "docks", force: :cascade do |t|
    t.string "section"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "door_ranges", force: :cascade do |t|
    t.string "range"
    t.integer "dock_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "doors", force: :cascade do |t|
    t.string "number"
    t.integer "door_range_id"
    t.boolean "racks", default: false
    t.boolean "stage", default: false
    t.boolean "inbound_present", default: false
    t.boolean "inbound_available", default: false
    t.boolean "outbound_present", default: false
    t.boolean "outbound_available", default: false
    t.boolean "serviceable", default: true
    t.string "service_comments", default: ""
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
