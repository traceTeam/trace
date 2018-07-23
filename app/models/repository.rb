class Repository < ActiveRecord::Base
    mount_uploader :img, ImgUploader
  has_many :trips, dependent: :destroy
  belongs_to :user
end
