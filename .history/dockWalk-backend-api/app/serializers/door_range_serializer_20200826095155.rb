class DoorRangeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :range, :racks, :doors, :inbounds, :outbounds
end
