class DoorRange < ApplicationRecord
    belongs_to :dock
    has_many :doors
    has_many :discoveries
end
