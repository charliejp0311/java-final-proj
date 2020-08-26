class InboundSerializer
  include FastJsonapi::ObjectSerializer
  attributes :available, :used, :percent_complete
end
