class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :title
      t.text :content
      t.integer :repository_id
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
