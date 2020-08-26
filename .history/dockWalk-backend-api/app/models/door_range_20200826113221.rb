class DoorRange < ApplicationRecord
    belongs_to :dock
    has_many :doors
   
end
