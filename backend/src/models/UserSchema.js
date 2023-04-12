const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  full_name: mongoose.Schema.Types.String,
  user_name: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
});

module.exports = mongoose.model("User", UserSchema);
