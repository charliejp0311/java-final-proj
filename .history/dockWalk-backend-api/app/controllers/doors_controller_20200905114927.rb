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
    door.update(racks: params[:racks],stage: params[:stage],outbound_available: params[:outbound_available],outbound_present: params[:outbound_present],inbound_available: params[:inbound_available],inbound_present: params[:inbound_present],serviceable: params[:serviceable],service_comments: params[:service_comments])
    if door.serviceable
      door.update(service_comments: "")
    end
    render json: DoorSerializer.new(door)
  end
  
end
