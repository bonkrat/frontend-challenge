import { gql } from "apollo-boost";

export const CAMPAIGNS_QUERY = gql`
  query {
    campaigns {
      id
      title
      description
      image
      goal
      funds
      creator {
        name
      }
      backers {
        id
        name
        avatar
      }
    }
  }
`;
