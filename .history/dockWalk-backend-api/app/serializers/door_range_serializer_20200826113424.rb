class DoorRangeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :range, :racks
  belongs_to :dock
  has_many :doors
end
