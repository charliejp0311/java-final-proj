class OutboundsController < ApplicationController
  def index
    outbounds = Outbound.all
    render json: OutboundSerializer.new(outbounds)
  end

  def show
  end

  def edit
  end

  def create
  end

  def destroy
  end

end
