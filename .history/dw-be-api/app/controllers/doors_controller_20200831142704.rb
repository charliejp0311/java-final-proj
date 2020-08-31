class DoorsController < ApplicationController
    def index
        doors = Door.all
        render json: doorSerializer.new(doors)
    end
    def show
        door = door.find_by(id: params[:id])
end
