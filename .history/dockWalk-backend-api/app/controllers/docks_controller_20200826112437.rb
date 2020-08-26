class DocksController < ApplicationController
  def index
    docks = Dock.all
    options = {
      include: [:door_ranges, :doors]
    }
    render json: DockSerializer.new(docks, options)
  end

  def show
    dock = Dock.find_by(id: params[:id])
    options = {
      include: [:door_ranges, :doors]
    }
    render json: DockSerializer.new(dock, options)
  end
end
