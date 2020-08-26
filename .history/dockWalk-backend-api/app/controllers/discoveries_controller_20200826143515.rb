class DiscoveriesController < ApplicationController
  def index
    discoveries = Discovery.all 
    render json: DiscoverySerializer.new(discoveries)
  end

  def show
  end

  def new
  end

  def create
  end

  def destroy
  end
end
