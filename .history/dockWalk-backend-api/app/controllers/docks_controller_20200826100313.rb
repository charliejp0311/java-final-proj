class DocksController < ApplicationController
  def index
    docks = Dock.all
    render json: DockSerializer.new(docks)
  end

  def show
    dock = Dock.find_by(id: params[:id])
    render json: DockSerializer.new(dock)
  end
end
