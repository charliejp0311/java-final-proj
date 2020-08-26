require 'test_helper'

class DocksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get docks_index_url
    assert_response :success
  end

  test "should get show" do
    get docks_show_url
    assert_response :success
  end

end
