class DockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :section, :door_ranges => {:only => [:range, :racks, :doors]}
end
