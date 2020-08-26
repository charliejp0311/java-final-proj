class DoorRangesController < ApplicationController
  def index
    door_ranges = DoorRange.all
    render json: DoorRangeSerializer.new(door_ranges)
  end

  def show
  end
end
