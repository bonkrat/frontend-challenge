const { Campaign } = require("../models");
const getBalance = require("./utils/getBalance");

module.exports = async (parent, args) => {
  const campaign = await Campaign.findById(args.id);
  const funds = getBalance(campaign.address);

  return {
    id: campaign.id,
    title: campaign.title,
    description: campaign.description,
    image: campaign.image,
    creator: {
      id: campaign.creator.id,
      name: campaign.creator.name,
      balance: await getBalance(campaign.creator.address)
    },
    backers: campaign.backers.map(backer => {
      return {
        id: backer.id,
        name: backer.name,
        avatar: backer.avatar,
        balance: getBalance(backer.address)
      };
    }),
    funds,
    goal: campaign.goal
  };
};
