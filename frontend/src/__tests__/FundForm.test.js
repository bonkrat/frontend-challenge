import React, { useState } from "react";
import { shallow } from "enzyme";
import {
  FundFormMutation,
  FundForm,
  updateCache,
  contributionOptions
} from "../components/FundForm";
import toJson from "enzyme-to-json";
import FundButton from "../components/FundButton";
import useQuery from "../hooks/useQuery";
import useMutation from "../hooks/useMutation";
import { FUND_CAMPAIGN } from "../components/FundForm.graphql";
import { toast } from "react-toastify";
import CurrentUser from "../containers/CurrentUser";
import { CAMPAIGN_QUERY } from "../components/Campaign.graphql";
import { USER_INFO_QUERY } from "../components/UserInfo.graphql";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(() => [1, jest.fn()])
}));

jest.mock("../hooks/useMutation", () =>
  jest.fn(() => [jest.fn(), { loading: false }])
);

jest.mock("../containers/CurrentUser", () => ({
  useContainer: jest.fn(() => ({
    user: {
      id: "userfoo",
      balance: 500
    }
  }))
}));

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    POSITION: {
      BOTTOM_RIGHT: "br"
    }
  }
}));

describe("FundForm", () => {
  const mockFundFn = jest.fn();
  const mockSetFn = jest.fn();
  let wrapper;

  const props = {
    fundCampaign: mockFundFn,
    campaignId: "foo",
    userId: "foo",
    loading: false,
    selectedAmount: 5,
    setAmount: mockSetFn
  };

  beforeEach(() => {
    wrapper = shallow(<FundForm {...props} />);
  });

  it("renders correctly", () => {
    shallow(<FundForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders loading styles correctly", () => {
    wrapper.setProps({
      ...props,
      loading: true
    });
    wrapper.update();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("sets the amount when an amount is clicked", () => {
    contributionOptions.forEach(amount => {
      const handler = wrapper
        .findWhere(n => n.prop("id") === `${amount}-button`)
        .prop("onClick");

      handler();

      expect(props.setAmount).toHaveBeenCalledWith(amount);
    });
  });

  it("funds the campaign when the button is clicked", () => {
    const handler = wrapper.find(FundButton).prop("onClick");
    handler();
    expect(props.fundCampaign).toHaveBeenCalledWith({
      variables: {
        campaignId: props.campaignId,
        userId: props.userId,
        amount: 5
      }
    });
  });
});

describe("FundFormMutation", () => {
  let wrapper;

  const props = {
    campaignId: "foo"
  };

  beforeEach(() => {
    wrapper = shallow(<FundFormMutation {...props} />);
  });

  afterEach(() => {
    useState.mockClear();
  });

  it("renders correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("passes the selected amount from state", () => {
    expect(useState).toHaveBeenCalledWith(1);

    expect(wrapper.find(FundForm).prop("selectedAmount")).toBe(1);

    wrapper.find(FundForm).prop("setAmount")();

    expect(useState.mock.results[0].value[1]).toHaveBeenCalled();
  });

  it("uses a the fund form mutation", () => {
    expect(useMutation).toHaveBeenCalled();
    expect(useMutation.mock.calls[0][0]).toBe("FUND_FORM");
    expect(useMutation.mock.calls[0][1]).toBe(FUND_CAMPAIGN);
    expect(useMutation.mock.calls[0][2].update.toString()).toEqual(
      updateCache("foo", 1).toString()
    );
  });

  it("calls a toast on completion", () => {
    useMutation.mock.calls[0][2].onCompleted();
    expect(toast.success).toHaveBeenCalledWith(
      "You successfully funded this campaign!",
      {
        position: "br"
      }
    );
  });

  it("provides the user from global state", () => {
    expect(CurrentUser.useContainer).toHaveBeenCalled();
    expect(wrapper.find(FundForm).prop("userId")).toBe("userfoo");
  });
});

describe("updateCache", () => {
  it("writes the new mutation data to the cache", () => {
    const updateFn = updateCache("foo", 123);

    const cache = {
      readQuery: jest.fn(() => ({
        loggedInUser: {
          id: "foouser",
          balance: 124
        }
      })),
      writeQuery: jest.fn()
    };
    const data = {
      data: {
        campaign: {
          id: "foocampaign"
        },
        fundCampaign: {
          title: "footitle"
        }
      }
    };
    updateFn(cache, data);

    expect(cache.readQuery).toHaveBeenCalledTimes(2);
    expect(cache.readQuery).toHaveBeenCalledWith({
      query: CAMPAIGN_QUERY,
      variables: {
        id: "foo"
      }
    });
    expect(cache.readQuery).toHaveBeenCalledWith({
      query: USER_INFO_QUERY
    });
    expect(cache.writeQuery).toHaveBeenCalledTimes(2);
    expect(cache.writeQuery).toHaveBeenCalledWith({
      query: CAMPAIGN_QUERY,
      variables: { id: "foo" },
      data: {
        campaign: {
          title: "footitle"
        }
      }
    });
    expect(cache.writeQuery).toHaveBeenCalledWith({
      query: USER_INFO_QUERY,
      data: {
        loggedInUser: {
          id: "foouser",
          balance: 1
        }
      }
    });
  });
});
