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
    discovery = Discovery.create(dock_id: Dock.find_by(section: params[:dock]).id, door_range_id: DoorRange.find_by(range: params[:range]), door_id: Door.find_by(number: params[:door]), racks: params[:racks], stage: params[:stage], inbound_present: params[:inbound_present], inbound_available: params[:inbound_available], outbound_present: params[:outbound_present], outbound_available: params[:outbound_available], serviceable: params[:serviceable], service_comments: params[:service_comments])
  end
  
  def create
  end
  
  def destroy
    discovery = Discovery.find_by(id: params[:id])
    discovery.destroy
  end
end
