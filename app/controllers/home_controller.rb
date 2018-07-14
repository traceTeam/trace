class HomeController < ApplicationController

def index
    @user = User.new
end

def test 
    email = params[:email]
    user = User.find_by(email: email)
    if user 
        exist = True
    else
        exist = False
    end
    respond_to do |format|
        format.json {render json: exist}
    end
end

end
