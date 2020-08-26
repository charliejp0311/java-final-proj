class DoorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number, :stage, :serviceable, :service_comments
  belongs_to :door_range
end
