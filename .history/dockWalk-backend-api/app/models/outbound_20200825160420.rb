class Outbound < ApplicationRecord
    has_one :door
    has_one :user
end
