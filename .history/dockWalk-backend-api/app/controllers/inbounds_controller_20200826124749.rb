class InboundsController < ApplicationController
  def index
    inbounds = Inbound.all
    render json: InboundSerializer.new(inbounds)
  end

  def show
    inbound = Inbound.find_by(id: params[:id])
    render json: InboundSerializer.new(inbound)
  end

  def edit
    inbound = Inbound.find_by(id: params[:id])
    render json: InboundSerializer.new(inbound)
  end

  def create
  end

  def destroy
    inbound = Inbound.find_by(id: params[:id])
    inbound.destroy
  end

end
