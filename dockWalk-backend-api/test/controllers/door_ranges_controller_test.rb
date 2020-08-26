require 'test_helper'

class DoorRangesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get door_ranges_index_url
    assert_response :success
  end

  test "should get show" do
    get door_ranges_show_url
    assert_response :success
  end

end
