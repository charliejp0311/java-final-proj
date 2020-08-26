class OutboundSerializer
  include FastJsonapi::ObjectSerializer
  attributes :available, :used, :percent_complete, :last_updated_by 
  belongs_to :door
end
