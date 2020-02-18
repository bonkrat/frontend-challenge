import React from "react";
import { shallow } from "enzyme";
import FundedBar from "../components/FundedBar";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const props = {
    className: "foo",
    goal: 100,
    funds: 25
  };
  expect(toJson(shallow(<FundedBar {...props} />))).toMatchSnapshot();
});
