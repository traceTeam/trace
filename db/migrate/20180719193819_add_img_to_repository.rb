class AddImgToRepository < ActiveRecord::Migration
  def change
    add_column :repositories, :img, :string
  end
end
