class DoorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :dock, :range, :number, :stage, :serviceable, :service_comment
end
