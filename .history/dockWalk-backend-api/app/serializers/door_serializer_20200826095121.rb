class DoorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number, :stage, :serviceable, :service_comments, :inbounds, :outbounds
end
