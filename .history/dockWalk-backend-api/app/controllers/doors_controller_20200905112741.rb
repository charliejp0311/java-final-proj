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
    door = Door.find_by(id:params[:id])
    if !door.serviceable
      door.update(racks: params[:racks],stage: params[:stage],outbound_available: params[:outbound_available],outbound_present: params[:outbound_present],inbound_available: params[:inbound_available],inbound_present: params[:inbound_present],serviceable: params[:serviceable],service_comments: params[:service_comments])
    else
      door.update(racks: params[:racks],stage: params[:stage],outbound_available: params[:outbound_available],outbound_present: params[:outbound_present],inbound_available: params[:inbound_available],inbound_present: params[:inbound_present],serviceable: params[:serviceable],service_comments: "")
    end
    door.discoveries.last.update(racks: door.racks, stage: door.stage,outbound_available: door.outbound_available,outbound_present: door.outbound_present,inbound_available: door.inbound_available,inbound_present: door.inbound_present,serviceable: door.serviceable,service_comments: door.service_comments)
    render json: DoorSerializer.new(door)
  end
  
end
