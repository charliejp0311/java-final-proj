class Door < ApplicationRecord
    belongs_to :door_range
    belongs_to :dock, through: :door_range
    has_one :inbound
    has_one :outbound
end
