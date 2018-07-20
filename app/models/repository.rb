class Repository < ActiveRecord::Base
    mount_uploader :img, ImgUploader
end
