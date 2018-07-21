class RepositoriesController < ApplicationController
  before_action :set_repository, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user! #로그인해야 접근 가능   , only:[:index, :show, :edit, :update, :destroy] 


  def text
  end

  # GET /repositories
  # GET /repositories.json
  def index
    @repositories = Repository.where(user_id: current_user)  # Repository.where(user_id: 1) 콘솔에서 확인
  end

  # GET /repositories/1
  # GET /repositories/1.json
  def show
  end

  # GET /repositories/new
  def new
  #  @repository = Repository.new
  end

  # GET /repositories/1/edit
  def edit
  end

  # POST /repositories
  # POST /repositories.json
  def create
    
    # @repository = Repository.new(repository_params)

    # respond_to do |format|
    #   if @repository.save
    #     format.html { redirect_to @repository, notice: 'Repository was successfully created.' }
    #     format.json { render :show, status: :created, location: @repository }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @repository.errors, status: :unprocessable_entity }
    #   end
    # end
    
    
    #Repository.create(title: params[:title],content: params[:content],user_id: current_user.id)
    Repository.create(title: params[:repository][:title], content: params[:repository][:content], user_id: current_user.id, img: params[:repository][:img])
    redirect_to '/'
    
  end

  # PATCH/PUT /repositories/1
  # PATCH/PUT /repositories/1.json
  def update
    respond_to do |format|
      if @repository.update(repository_params)
        format.html { redirect_to @repository, notice: 'Repository was successfully updated.' }
        format.json { render :show, status: :ok, location: @repository }
      else
        format.html { render :edit }
        format.json { render json: @repository.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /repositories/1
  # DELETE /repositories/1.json
  def destroy
    @repository.destroy
    respond_to do |format|
      format.html { redirect_to repositories_url, notice: 'Repository was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_repository
      @repository = Repository.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def repository_params
      params.require(:repository).permit(:title, :content, :user_id, :img)
    end
    
end
