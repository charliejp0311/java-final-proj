require 'test_helper'

class OutboundsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get outbounds_show_url
    assert_response :success
  end

  test "should get edit" do
    get outbounds_edit_url
    assert_response :success
  end

  test "should get create" do
    get outbounds_create_url
    assert_response :success
  end

  test "should get destroy" do
    get outbounds_destroy_url
    assert_response :success
  end

  test "should get index" do
    get outbounds_index_url
    assert_response :success
  end

end
