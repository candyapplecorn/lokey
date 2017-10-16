class Api::ActivitiesController < ApplicationController
  def create
    @activity = Activity.new(activity_params)
    if @activity.save
      render '/api/events/index'
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def index
    @activities = Activity.all
  end

  def activity_params
    params.require(:activity).permit(:name)
  end
end
