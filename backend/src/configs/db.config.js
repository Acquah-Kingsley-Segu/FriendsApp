// database configuration
const mongoose = require("mongoose");
const config = require("./default.json");

const connectDB = () => {
  mongoose
    .connect(config.mongoDBURL)
    .then(() => {
      console.log("Successful");
    })
    .catch(() => {
      console.log("Unsuccesful");
    });
};

module.exports = connectDB;
