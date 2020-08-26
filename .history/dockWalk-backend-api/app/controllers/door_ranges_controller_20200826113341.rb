class DoorRangesController < ApplicationController
  def index
    door_ranges = DoorRange.all
    render json: DoorRangeSerializer.new(door_ranges)
  end

  def show
    door_range = DoorRange.find_by(id: params[:id])
    options = {
      include: [:doors]
    }
    render json: DoorRangeSerializer.new(door_range, options)
  end
end
