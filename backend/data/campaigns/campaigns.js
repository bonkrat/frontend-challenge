const users = require("../users/users");
const casual = require("casual");
const { random, times, uniqBy } = require("lodash");

const campaignWallets = [
  "0x127d8e4ff13fb4da2e958fea479063bc5ea3b018",
  "0x6a77ca7036659e4620c2bec9ba515aee742069fa",
  "0xe382e09fb32aebeb101c51dbc17eaef76dadc4bd",
  "0x3208f840dd7398c221a1a48c8bae764ab7ac76d1",
  "0x0ef52e30436d6a3ec8ebab6ea64c56495983dc07",
  "0x5f3d4d452a4c8c95df1b441715517aefd321efb2",
  "0x93e377aa361b369c0872495e0f9ed5bf19add5a8",
  "0x48c1361901879d43dfe497ac879447c5d802b548",
  "0x2645cde99abe33758151d31637dc42502d166660",
  "0x4e2e90642ffd8941266e756f72f161b0c5bc20df",
  "0xf2fda8f922eaa306c3b14865f65e685c1f374fbb",
  "0x91d395fbe834bf4895ec749bd8ec330bf1b54d90"
];

module.exports = campaignWallets.map((address, index) => {
  return {
    title: casual.word + " " + casual.title,
    description: casual.sentences((n = random(3, 6))),
    image: `${index}.jpg`,
    address,
    creator: users[random(1, 9)],
    backers: uniqBy(
      times(random(0, 5), () => users[random(1, 9)]),
      "id"
    ),
    goal: random(100, 1200)
  };
});
