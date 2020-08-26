require 'test_helper'

class InboundsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get inbounds_show_url
    assert_response :success
  end

  test "should get edit" do
    get inbounds_edit_url
    assert_response :success
  end

  test "should get create" do
    get inbounds_create_url
    assert_response :success
  end

  test "should get destroy" do
    get inbounds_destroy_url
    assert_response :success
  end

  test "should get index" do
    get inbounds_index_url
    assert_response :success
  end

end
