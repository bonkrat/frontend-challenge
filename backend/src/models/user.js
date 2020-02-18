var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var userSchema = Schema({
  name: String,
  avatar: String,
  address: String,
  backed: [{ type: Schema.Types.ObjectId, ref: "Campaign" }],
  campaigns: [{ type: Schema.Types.ObjectId, ref: "Campaign" }]
});

module.exports = mongoose.model("User", userSchema);
