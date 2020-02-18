import React from "react";
import { shallow } from "enzyme";
import Header from "../components/Header";
import toJson from "enzyme-to-json";

jest.mock("../containers/GlobalLoading", () => ({
  useContainer: jest
    .fn()
    .mockReturnValueOnce({ isGlobalLoading: false })
    .mockReturnValueOnce({ isGlobalLoading: true })
}));

it("renders correctly", () => {
  expect(toJson(shallow(<Header />))).toMatchSnapshot();
});

it("renders loading styles correctly", () => {
  expect(toJson(shallow(<Header />))).toMatchSnapshot();
});
