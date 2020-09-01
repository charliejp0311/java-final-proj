class DoorRangeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :range, :racks
  belongs_to :dock
  has_many :doors
end
