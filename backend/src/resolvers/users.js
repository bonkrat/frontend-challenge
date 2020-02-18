const { User } = require("../models/");
const getBalance = require("./utils/getBalance");

module.exports = async () => {
  const users = await User.find();
  return users.map(user => ({
    id: user.id,
    name: user.name,
    balance: getBalance(user.address)
  }));
};
