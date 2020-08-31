class Door < ApplicationRecord
    belongs_to :door_range
    has_many :discoveries
end
