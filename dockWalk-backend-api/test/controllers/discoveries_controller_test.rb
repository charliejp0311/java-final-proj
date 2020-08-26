require 'test_helper'

class DiscoveriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get discoveries_index_url
    assert_response :success
  end

  test "should get show" do
    get discoveries_show_url
    assert_response :success
  end

  test "should get new" do
    get discoveries_new_url
    assert_response :success
  end

  test "should get create" do
    get discoveries_create_url
    assert_response :success
  end

  test "should get destroy" do
    get discoveries_destroy_url
    assert_response :success
  end

end
