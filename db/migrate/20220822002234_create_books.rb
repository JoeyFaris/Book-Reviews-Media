class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :amazon_url
      t.string :img_url
      t.timestamps
    end
  end
end
