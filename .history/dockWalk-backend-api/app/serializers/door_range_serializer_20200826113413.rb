class DoorRangeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :range, :racks, :doors
  belongs_to :dock
  has_many :doors
end
