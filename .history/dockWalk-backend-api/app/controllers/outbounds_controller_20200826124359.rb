class OutboundsController < ApplicationController
  def index
    outbounds = Outbound.all
    render json: OutboundSerializer.new(outbounds)
  end

  def show
    outbound = Outbound.find_by(id: params[:id])
  end

  def edit
    outbound = Outbound.find_by(id: params[:id])
  end

  def create
  end

  def destroy
  outbound = Outbound.find_by(id: params[:id])    
  end

end
