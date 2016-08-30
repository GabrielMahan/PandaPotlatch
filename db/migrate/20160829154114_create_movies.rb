class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :release_date
      t.text :description
      t.string :img_src
      t.string :rating
      t.string :genre
      t.integer :director_id

      t.timestamps null: false

    end
  end
end
