class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
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

  private
  def event_params
    params.require(:event).permit(:host_id, :activity_id, :description)
  end

end
