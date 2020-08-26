class DocksController < ApplicationController
  def index
    docks = Dock.all
    options = {
      include: [:door_ranges]
    }
    render json: DockSerializer.new(docks, options)
  end

  def show
    dock = Dock.find_by(id: params[:id])
    render json: DockSerializer.new(dock)
  end
end
