class Dock < ApplicationRecord
    has_many :door_ranges
    has_many :doors, through: :door_ranges
end
