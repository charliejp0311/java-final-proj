class DoorRangeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :range
  belongs_to :dock
  has_many :doors
end
