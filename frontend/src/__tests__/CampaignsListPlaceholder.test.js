import React from "react";
import { shallow } from "enzyme";
import CampaignsListPlaceholder from "../components/CampaignsListPlaceholder";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  expect(toJson(shallow(<CampaignsListPlaceholder />))).toMatchSnapshot();
});
