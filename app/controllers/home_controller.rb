class HomeController < ApplicationController

def index
    #@user = User.new
end

def test2
end


def test 
    alert("Ddd");
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

def email_check
    #puts(params[:email]+' zzz')
    
    @email = User.find_by(email: params[:email]).nil?
    puts params[:email]
    # if params[:email] == ""
    #      return false;
    # end 

    @email_val = params[:email]
    #puts @email_val + " 하하하하"
    respond_to do |format|
        format.html {redirect_to :back}
        format.js{}
    end
end 

end
