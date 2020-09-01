class DoorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :number, :stage, :serviceable, :service_comments, :inbound_available, :inbound_present, :outbound_available, :outbound_present
  belongs_to :door_range
end
