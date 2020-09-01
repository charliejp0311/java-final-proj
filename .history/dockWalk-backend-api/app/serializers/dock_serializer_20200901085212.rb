class DockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :section
  has_many :door_ranges
  has_many :doors, through: :door_ranges
end
