import { gql } from "apollo-boost";

/**
 * There's currently no authentication or user accounts, so the logged in user
 * is hardcoded.
 */
export const USER_INFO_QUERY = gql`
  query getLoggedInUser {
    loggedInUser {
      id
      name
      avatar
      balance
    }
  }
`;
