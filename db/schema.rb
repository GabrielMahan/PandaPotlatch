# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160829154134) do

  create_table "comments", force: :cascade do |t|
    t.string   "commentable_type", null: false
    t.integer  "commentable_id",   null: false
    t.text     "body",             null: false
    t.integer  "user_id",          null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string   "title",        null: false
    t.date     "release_date"
    t.text     "description"
    t.string   "img_src"
    t.string   "rating"
    t.string   "genre"
    t.integer  "director_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string   "title",        null: false
    t.string   "tomato_score"
    t.text     "body"
    t.integer  "critic_id",    null: false
    t.integer  "movie_id",     null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "access_level",    null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "votes", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.boolean  "up?",           null: false
    t.string   "voteable_type", null: false
    t.integer  "voteable_id",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

end