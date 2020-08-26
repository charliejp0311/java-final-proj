class DocksController < ApplicationController
  def index
    docks = Dock.all
    render json: DockSerializer.new(docks)
  end

  def show
  end
end
