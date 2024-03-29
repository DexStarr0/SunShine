const mongoose = require("mongoose");

//defining schema for document
const userSchema = mongoose.Schema({
  Date: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
  },
  answer: {
    type: String,
    required: true,
  },
});

//create class of user collection
const User = mongoose.model("USER", userSchema);
module.exports = User;
