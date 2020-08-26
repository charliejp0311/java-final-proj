class DiscoveriesController < ApplicationController
  def index
    discoveries = Discovery.all 
    render json: DiscoverySerializer.new(discoveries)
  end

  def show
    discovery = Discovery.find_by(id: params[:id])
  end

  def new
  end

  def create
  end

  def destroy
  end
end
