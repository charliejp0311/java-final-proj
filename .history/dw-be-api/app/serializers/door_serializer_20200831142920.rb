class DoorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :dock, :range, :number, :serviceable, :service_comment
end
