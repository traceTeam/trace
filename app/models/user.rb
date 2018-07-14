class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # after_validation :redirect_path
  
  # def redirect_path
  #   redirect_path :back unless self.persisted?
  # end
end
