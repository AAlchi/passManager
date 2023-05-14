const mongoose = require("mongoose");

const passwordSchema = new mongoose.Schema({
  for: { type: String },
  value: { type: String },
  username: { type: String },
});

const passwordSh = mongoose.model("password", passwordSchema);

module.exports = passwordSh;
