class DiscoveriesController < ApplicationController
  def index
    discoveries = Discovery.all 
    render json: DiscoverySerializer.new(discoveries)
  end

  def show
    discovery = Discovery.find_by(id: params[:id])
    render json: DiscoverySerializer.new(discovery)
  end
  
  def create
    docks = Dock.all
    dock = Dock.find_by(section: params[:dock])
    range = DoorRange.find_by(range: params[:range])
    door = Door.find_by(number: params[:door])
    discovery = Discovery.create(dock_id: dock.id, door_range_id: range.id, door_id: door.id, racks: params[:racks], stage: params[:stage], inbound_present: params[:inbound_present], inbound_available: params[:inbound_available], outbound_present: params[:outbound_present], outbound_available: params[:outbound_available], serviceable: params[:serviceable], service_comments: params[:s_comments])
    door.update(racks: discovery.racks, stage: discovery.stage, inbound_present: discovery.inbound_present, inbound_available: discovery.inbound_available, outbound_present: discovery.outbound_present, outbound_available: discovery.outbound_available, serviceable: discovery.serviceable, service_comments: discovery.s_comments])
    render json: DockSerializer.new(docks)
  end
  
  def destroy
    discovery = Discovery.find_by(id: params[:id])
    discovery.destroy
  end
end
