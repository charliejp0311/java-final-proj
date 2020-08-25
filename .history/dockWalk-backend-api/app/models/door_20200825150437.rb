class Door < ApplicationRecord
    has_one :door_range
    has_one :dock, through: :door_range
end
