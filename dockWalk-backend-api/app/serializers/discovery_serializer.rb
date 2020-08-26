class DiscoverySerializer
  include FastJsonapi::ObjectSerializer
  attributes :door_range_update, :door_update, :updated_at
end
