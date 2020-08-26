class DoorRange < ApplicationRecord
    belongs_to :dock
    has_many :doors
    has_many :inbounds, through: :doors
    has_many :outbounds, through: :doors
end
