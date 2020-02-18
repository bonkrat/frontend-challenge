import React from "react";
import { shallow } from "enzyme";
import { CampaignsList, CampaignsListQuery } from "../components/CampaignsList";
import toJson from "enzyme-to-json";
import useQuery from "../hooks/useQuery";
import CampaignsListPlaceholder from "../components/CampaignsListPlaceholder";
import { CAMPAIGNS_QUERY } from "../components/CampaignsList.graphql";

jest.mock("../hooks/useQuery", () =>
  jest
    .fn()
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
        campaigns: [
          {
            id: "foo"
          }
        ]
      }
    })
);

describe("CampaignsList", () => {
  it("renders campaigns correctly", () => {
    const props = {
      data: {
        campaigns: [
          {
            id: "foo"
          },
          {
            id: "bar"
          },
          { id: "baz" },
          { id: "qix" }
        ]
      }
    };
    const wrapper = shallow(<CampaignsList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("CampaignsListQuery", () => {
  it("renders a placeholder on loading", () => {
    const wrapper = shallow(<CampaignsListQuery data="foo" />);

    expect(useQuery).toHaveBeenCalledWith("CAMPAIGNS_LIST", CAMPAIGNS_QUERY);
    expect(wrapper.find(CampaignsListPlaceholder).exists()).toBeTruthy();
  });
  it("renders a placeholder on error", () => {
    const wrapper = shallow(<CampaignsListQuery data="foo" />);

    expect(useQuery).toHaveBeenCalledWith("CAMPAIGNS_LIST", CAMPAIGNS_QUERY);
    expect(wrapper.find(CampaignsListPlaceholder).exists()).toBeTruthy();
  });
  it("renders a campaign", () => {
    const wrapper = shallow(<CampaignsListQuery data="foo" />);

    expect(useQuery).toHaveBeenCalledWith("CAMPAIGNS_LIST", CAMPAIGNS_QUERY);
    expect(wrapper.find(CampaignsList).exists()).toBeTruthy();
    expect(wrapper.find(CampaignsList).props()).toMatchObject({
      data: {
        campaigns: [
          {
            id: "foo"
          }
        ]
      }
    });
  });
});
