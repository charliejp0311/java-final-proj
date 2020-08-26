class DockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :section, :door_ranges
end
