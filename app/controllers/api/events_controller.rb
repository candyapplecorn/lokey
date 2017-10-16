class Api::EventsController < ApplicationController

  def index
    @events = bounds ? Event.in_bounds(bounds) : Event.all
    render :index
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def create
    @event = Event.new(host_id: current_user.id, activity: Activity.find_by(name: event_params[:activity]), description: event_params[:description], coordinate: Coordinate.create({latitude: event_params[:lat], longitude: event_params[:lng]}))
    if @event.save
      @events = bounds ? Event.in_bounds(bounds) : Event.all
      render :index
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update
      render :show
    else
      render json: @event.errors.full_messages, status: 401
    end
  end

  def destroy
    @event = Event.find(params[:id])
    if @event.destroy
      render :show
    else
      render json: @event.errors.full_messages, status: 401
    end
  end

  def bounds
    params[:bounds]
  end

  private
  def event_params
    params.require(:event).permit(:lat, :lng, :activity, :description)
  end

end
