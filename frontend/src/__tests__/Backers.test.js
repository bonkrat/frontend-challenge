import React from "react";
import { shallow } from "enzyme";
import Backers from "../components/Backers";
import toJson from "enzyme-to-json";

const props = {
  backers: [
    {
      id: "foo",
      name: "fooname",
      avatar: "fooavatar"
    },
    {
      id: "bar",
      name: "barname",
      avatar: "baravatar"
    }
  ]
};

it("renders correctly", () => {
  const wrapper = shallow(<Backers {...props} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
