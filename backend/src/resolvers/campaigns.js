const { Campaign } = require("../models");
const getBalance = require("./utils/getBalance");

module.exports = async () => {
  const campaigns = await Campaign.find();

  return campaigns.map(async campaign => {
    return {
      id: campaign.id,
      title: campaign.title,
      description: campaign.description,
      image: campaign.image,
      address: campaign.address,
      creator: {
        id: campaign.creator.id,
        name: campaign.creator.name,
        balance: await getBalance(campaign.creator.address)
      },
      backers: campaign.backers.map(backer => ({
        id: backer.id,
        name: backer.name,
        avatar: backer.avatar,
        balance: getBalance(backer.address)
      })),
      goal: campaign.goal,
      funds: await getBalance(campaign.address)
    };
  });
};
