import React from "react";
import { shallow } from "enzyme";
import { UserInfoQuery, UserInfo } from "../components/UserInfo";
import toJson from "enzyme-to-json";
import useQuery from "../hooks/useQuery";
import { USER_INFO_QUERY } from "../components/UserInfo.graphql";
import CurrentUser from "../containers/CurrentUser";

jest.mock("../containers/CurrentUser", () => ({
  useContainer: jest.fn(() => ({
    setUser: jest.fn()
  }))
}));

jest.mock("../hooks/useQuery", () =>
  jest
    .fn(() => ({
      loading: false,
      error: false,
      data: {}
    }))
    .mockReturnValueOnce({
      loading: true,
      error: false,
      data: {}
    })
    .mockReturnValueOnce({
      loading: false,
      error: true,
      data: {}
    })
    .mockReturnValueOnce({
      loading: false,
      error: false,
      data: {
        loggedInUser: {
          id: "foo"
        }
      }
    })
);

let wrapper;

describe("UserInfo", () => {
  const props = {
    loading: true,
    name: "foo",
    avatar: "foo.jpg",
    balance: 9001
  };

  beforeEach(() => {
    wrapper = shallow(<UserInfo {...props} />);
  });

  it("renders correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders loading styles", () => {
    wrapper.setProps({ loading: true });
    wrapper.update();

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("UserInfoQuery", () => {
  beforeEach(() => {
    wrapper = shallow(<UserInfoQuery />);
  });

  afterEach(() => {
    CurrentUser.useContainer.mockClear();
  });

  it("sets loading on user info", () => {
    expect(wrapper.find(UserInfo).prop("loading")).toBe(true);
  });

  it("returns nothing if there's an error", () => {
    expect(wrapper.find(UserInfo).exists()).toBeFalsy();
  });

  it("queries for user info and sets it to user info", () => {
    expect(useQuery).toHaveBeenCalledWith("USER_INFO", USER_INFO_QUERY);
    expect(wrapper.find(UserInfo).prop("id")).toBe("foo");
  });

  it("sets the user to global state", () => {
    expect(CurrentUser.useContainer).toHaveBeenCalled();
  });
});
