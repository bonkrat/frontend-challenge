var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const campaignSchema = Schema({
  title: String,
  description: String,
  image: String,
  address: String,
  creator: Object,
  backers: Array,
  goal: Number,
  funds: Number
});

module.exports = mongoose.model("Campaign", campaignSchema);
