class DoorsController < ApplicationController
  def index
    doors = Door.all
    render json: DoorSerializer.new(doors)
  end

  def show
    door = Door.find_by(id: params[:id])
    render json: DoorSerializer.new(door)
  end

  def update
    # this will be the patch request to change door attributes
    docks = Dock.all
    door = Door.find_by(id:params[:id])
    door.update(racks: params[:racks], stage: params[:stage], outbound_available: params[:outbound_available], outbound_present: params[:outbound_present], inbound_available: params[:inbound_available], inbound_present: params[:inbound_present], serviceable: params[:serviceable], service_comments: params[:s_comments])
    if door.serviceable == true
      door.update(service_comments: '')
    end
    render json: DockSerializer.new(docks)
  end

  def clear
    doors = Door.all
    discoveries = Discovery.all
    doors.each do |door|
      door.update(outbound_available: false, outbound_present: false, inbound_available: false, inbound_present:false)
    end
    discoveries.each do |disc|
      dr = Door.find_by(disc.door_id)
      dr.update(outbound_available: disc.outbound_available, outbound_present: disc.outbound_present, inbound_available: disc.inbound_available, inbound_present: disc.inbound_present)
    end
  end
  
end
