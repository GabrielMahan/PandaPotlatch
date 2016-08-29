class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.boolean :up?, null: false
      t.string :voteable_type, null: false
      t.integer :voteable_id, null: false

      t.timestamps null: false
    end
  end
end
