class DiscoverySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :dock_id, :door_range_id, :door_id, :racks, :stage, :serviceable, :service_comments, :inbound_available, :inbound_present, :outbound_available, :outbound_present
end
