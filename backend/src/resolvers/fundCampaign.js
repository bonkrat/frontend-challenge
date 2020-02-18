const { User, Campaign } = require("../models");
const transferFunds = require("./utils/transferFunds");
const getBalance = require("./utils/getBalance");
const { uniqBy } = require("lodash");

module.exports = async (parent, args) => {
  const { campaignId, userId, amount } = args;

  const campaign = await Campaign.findById(campaignId);
  const user = await User.findById(userId);
  const funds = await getBalance(campaign.address);

  await transferFunds(campaign.address, amount, user.address);

  const backer = {
    id: user.id,
    name: user.name,
    avatar: user.avatar,
    address: user.address,
    backed: user.backed,
    campaigns: user.campaigns
  };

  campaign.backers = uniqBy([...campaign.backers, backer], "id");

  await campaign.save();

  return {
    id: campaign.id,
    title: campaign.title,
    description: campaign.description,
    creator: campaign.creator,
    image: campaign.image,
    backers: campaign.backers,
    funds: parseInt(funds) + parseInt(amount),
    goal: campaign.goal
  };
};
