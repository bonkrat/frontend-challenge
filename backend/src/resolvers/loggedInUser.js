const getBalance = require("./utils/getBalance");
const { User } = require("../models");

module.exports = async () => {
  const users = await User.find();
  const balance = await getBalance(users[0].address);
  return {
    id: users[0].id,
    name: users[0].name,
    avatar: users[0].avatar,
    balance
  };
};
