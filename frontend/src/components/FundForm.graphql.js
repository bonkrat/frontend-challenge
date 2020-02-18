import { gql } from "apollo-boost";

export const FUND_CAMPAIGN = gql`
  mutation FundCampaign($campaignId: ID!, $userId: ID!, $amount: Int!) {
    fundCampaign(campaignId: $campaignId, userId: $userId, amount: $amount) {
      funds
      backers {
        id
        name
        avatar
      }
    }
  }
`;
