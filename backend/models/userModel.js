const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  key: { type: String },
});

const userSh = mongoose.model("user", userSchema);

module.exports = userSh;
