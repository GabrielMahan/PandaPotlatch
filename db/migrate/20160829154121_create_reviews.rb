class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.string :tomato_score
      t.text :body
      t.integer :critic_id, null: false
      t.integer :movie_id, null: false

      t.timestamps null: false
    end
  end
end
