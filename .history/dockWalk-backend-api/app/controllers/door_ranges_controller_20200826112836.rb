class DoorRangesController < ApplicationController
  def index
    door_ranges = DoorRange.all
    options = {
      include: [:doors]
    }
    render json: DoorRangeSerializer.new(door_ranges, options)
  end

  def show
    door_range = DoorRange.find_by(id: params[:id])
    options = {
      include: [:doors]
    }
    render json: DoorRangeSerializer.new(door_range, options)
  end
end
