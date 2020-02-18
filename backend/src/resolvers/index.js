const user = require("./user");
const users = require("./users");
const loggedInUser = require("./loggedInUser");
const campaign = require("./campaign");
const campaigns = require("./campaigns");
const fundCampaign = require("./fundCampaign");

module.exports = {
  Query: {
    user,
    users,
    loggedInUser,
    campaign,
    campaigns
  },
  Mutation: {
    fundCampaign
  }
};
