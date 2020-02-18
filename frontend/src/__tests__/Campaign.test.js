import React from "react";
import { shallow } from "enzyme";
import { CampaignQuery, Campaign } from "../components/Campaign";
import toJson from "enzyme-to-json";
import useQuery from "../hooks/useQuery";
import CampaignPlaceholder from "../components/CampaignPlaceholder";
import { CAMPAIGN_QUERY } from "../components/Campaign.graphql";

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
        campaign: {
          id: "foo"
        }
      }
    })
);

describe("Campaign", () => {
  const props = {
    id: "foo",
    title: "footitle",
    creator: {
      name: "foocreator"
    },
    image: "fooimage",
    goal: 100,
    funds: 25,
    description: "foodescription",
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
    const wrapper = shallow(<Campaign {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("CampaignQuery", () => {
  it("renders a placeholder on loading", () => {
    const wrapper = shallow(<CampaignQuery id="foo" />);

    expect(useQuery).toHaveBeenCalledWith("CAMPAIGN_VIEW", CAMPAIGN_QUERY, {
      variables: {
        id: "foo"
      }
    });
    expect(wrapper.find(CampaignPlaceholder).exists()).toBeTruthy();
  });
  it("renders a placeholder on error", () => {
    const wrapper = shallow(<CampaignQuery id="foo" />);

    expect(useQuery).toHaveBeenCalledWith("CAMPAIGN_VIEW", CAMPAIGN_QUERY, {
      variables: {
        id: "foo"
      }
    });
    expect(wrapper.find(CampaignPlaceholder).exists()).toBeTruthy();
  });
  it("renders a campaign", () => {
    const wrapper = shallow(<CampaignQuery id="foo" />);

    expect(useQuery).toHaveBeenCalledWith("CAMPAIGN_VIEW", CAMPAIGN_QUERY, {
      variables: {
        id: "foo"
      }
    });
    expect(wrapper.find(Campaign).exists()).toBeTruthy();
    expect(wrapper.find(Campaign).props()).toMatchObject({ id: "foo" });
  });
});
