class DoorRangeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :range, :racks, :doors 
end
