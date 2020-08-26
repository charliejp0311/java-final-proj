class DoorRangeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :range, :racks, :doors [:number, :inbound, :outbound]
end
