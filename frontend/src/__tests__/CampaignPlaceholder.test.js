import React from "react";
import { shallow } from "enzyme";
import CampaignPlaceholder from "../components/CampaignPlaceholder";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  expect(toJson(shallow(<CampaignPlaceholder />))).toMatchSnapshot();
});
