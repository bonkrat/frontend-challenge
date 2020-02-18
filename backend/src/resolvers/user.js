const { User } = require("../models");
const getBalance = require("./utils/getBalance");

module.exports = async (parent, args, context, info) => {
  const user = await User.findById(args.id);
  const balance = await getBalance(user.address);
  return {
    id: user.id,
    name: user.name,
    balance
  };
};
