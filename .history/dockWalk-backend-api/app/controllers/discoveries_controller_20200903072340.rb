class DiscoveriesController < ApplicationController
  def index
    discoveries = Discovery.all 
    render json: DiscoverySerializer.new(discoveries)
  end

  def show
    discovery = Discovery.find_by(id: params[:id])
    render json: DiscoverySerializer.new(discovery)
  end
  
  def new
    Discovery.create(params[:serviceable])
  end
  
  def create
  end
  
  def destroy
    discovery = Discovery.find_by(id: params[:id])
    discovery.destroy
  end
end
