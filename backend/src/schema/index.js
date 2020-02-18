const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    avatar: String
    balance: Int
  }

  type Campaign {
    id: ID!
    title: String!
    description: String!
    image: String!
    address: String!
    creator: User!
    backers: [User]
    goal: Int
    funds: Int
  }

  type Query {
    campaigns: [Campaign]
    campaign(id: ID!): Campaign
    loggedInUser: User
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    fundCampaign(campaignId: ID!, userId: ID!, amount: Int!): Campaign
  }
`;
