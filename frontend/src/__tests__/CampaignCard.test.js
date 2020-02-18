import React from "react";
import { shallow } from "enzyme";
import CampaignCard, { LinkToProduct } from "../components/CampaignCard";
import toJson from "enzyme-to-json";

describe("CampaignCard", () => {
  const props = {
    size: ["flex-2"],
    hero: false,
    id: "fooid",
    description: "foodescription",
    image: "fooimage",
    goal: 100,
    funds: 25,
    creator: {
      name: "fooname"
    },
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

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CampaignCard {...props} />);
  });

  it("renders correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders correct styles when the card is a hero card", () => {
    wrapper.setProps({
      ...props,
      hero: true
    });
    wrapper.update();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
describe("LinkToProduct", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <LinkToProduct id="foo" style={{ color: "green" }}>
        Foo Child
      </LinkToProduct>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
