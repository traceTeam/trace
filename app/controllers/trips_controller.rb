class TripsController < ApplicationController
  before_action :set_trip, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user! #로그인해야 접근 가능   , only:[:index, :show, :edit, :update, :destroy] 

  # GET /trips
  # GET /trips.json
  def index
    # @trips = Trip.all
    if (params[:repository_id].nil?)  
      @trips = current_user.trips
    else
      @trips = current_user.trips.where(repository_id: params[:repository_id]).order("created_at DESC")
    end
  end
  # GET /trips/1
  # GET /trips/1.json
  def show
  end

  # GET /trips/new
  def new
    # @repository = Repository.find(params[:repository_id]) 
    # @repo_id = params[:repository_id]
    @trip = Trip.new
  end

  # GET /trips/1/edit
  def edit
  end

  # POST /trips
  # POST /trips.json
  def create
    @trip = current_user.trips.new(trip_params)

    respond_to do |format|
      if @trip.save
        format.html { redirect_to @trip, notice: 'Trip was successfully created.' }
        format.json { render :show, status: :created, location: @trip }
      else
        format.html { render :new }
        format.json { render json: @trip.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /trips/1
  # PATCH/PUT /trips/1.json
  def update
    respond_to do |format|
      if @trip.update(trip_params)
        format.html { redirect_to @trip, notice: 'Trip was successfully updated.' }
        format.json { render :show, status: :ok, location: @trip }
      else
        format.html { render :edit }
        format.json { render json: @trip.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /trips/1
  # DELETE /trips/1.json
  def destroy
    @trip.destroy
    respond_to do |format|
      format.html { redirect_to trips_path, notice: 'Trip was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  
  
  # test
  def test
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trip
      @trip = Trip.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def trip_params
      params.require(:trip).permit(:title, :content, :repository_id, :user_id)
    end
end
