const casual = require("casual");
const { getObjectId } = require("../../helpers");

const userWallets = [
  "0x3ca58ae1ea2c3d01706d1ec30408395a11b2aff1",
  "0xfa8041a7e226bfb1055d1aaa5d0cc3914fecb098",
  "0x7f7698e9cce94b2ecec1b78787b431fd0e759885",
  "0xdac4c443da8326df1336d97292b1bb61c531c9bb",
  "0xac2d5860353a4c47c7eef7f2ff0ffc71d6447535",
  "0x27a1ff5eb13bb77f5096fc6e6ca23ba429c8bb0c",
  "0x63b10331a014433113f1b03e3729fc66fe5489c8",
  "0xf745036760b7f7ad46d84cec7e2590dcc8e1e317",
  "0x5e85b37aec7fc16321d025338c88b85fef41f734",
  "0x362e54ca899c018f6e8a7cce385b43102802a1f2",
  "0x5f09d3db10178345c8ae0b2d2fe91dd3cf9dc2fd"
];

module.exports = userWallets.map((address, index) => ({
  id: getObjectId(`user${index}`),
  name: casual.username,
  avatar: `${index}.png`,
  address,
  backed: [],
  campaigns: []
}));
