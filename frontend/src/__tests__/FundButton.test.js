import React from "react";
import { shallow } from "enzyme";
import FundButton from "../components/FundButton";
import toJson from "enzyme-to-json";

let wrapper, mockFn;

beforeEach(() => {
  mockFn = jest.fn();

  const props = {
    loading: false,
    onClick: mockFn
  };

  wrapper = shallow(<FundButton {...props} />);
});

it("renders correctly", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders loading styles", () => {
  wrapper.setProps({
    loading: true
  });
  wrapper.update();

  expect(toJson(wrapper)).toMatchSnapshot();
});

it("calls the onClick handler when not loading", () => {
  const cb = wrapper.prop("onClick");

  cb();

  expect(mockFn).toHaveBeenCalled();
});

it("does not call the onClick handler when not loading", () => {
  wrapper.setProps({
    loading: true
  });

  wrapper.update();
  const cb = wrapper.prop("onClick");

  cb();

  expect(mockFn).not.toHaveBeenCalled();
});
