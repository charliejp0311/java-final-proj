class DockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :section, :door_range[:range]
  has_many :door_ranges
  has_many :doors, through: :door_ranges
end
