import { gql } from "apollo-boost";

export const CAMPAIGN_QUERY = gql`
  query getCampaign($id: ID!) {
    campaign(id: $id) {
      id
      title
      creator {
        name
      }
      description
      backers {
        id
        name
        avatar
      }
      image
      funds
      goal
    }
  }
`;
