class Discovery < ApplicationRecord
    # belongs_to :user
    belongs_to :door 
    belongs_to :dock
    belongs_to :door_range
end
