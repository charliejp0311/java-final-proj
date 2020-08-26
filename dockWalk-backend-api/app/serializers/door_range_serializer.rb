class DoorRangeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :range, :racks
end
