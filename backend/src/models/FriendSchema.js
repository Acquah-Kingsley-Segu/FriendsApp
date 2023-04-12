const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  first_name: mongoose.Schema.Types.String,
  last_name: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  phone: mongoose.Schema.Types.String,
  twitter: mongoose.Schema.Types.String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.Model("Friend", FriendSchema);
