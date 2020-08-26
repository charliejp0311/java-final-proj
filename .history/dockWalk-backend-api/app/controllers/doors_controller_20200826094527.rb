class DoorsController < ApplicationController
  def index
    doors = Door.all
    render json: DoorSerializer.new(doors)
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
