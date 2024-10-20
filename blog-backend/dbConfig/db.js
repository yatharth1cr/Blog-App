const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = mongoose
  .connect(process.env.mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

module.exports = connection;
