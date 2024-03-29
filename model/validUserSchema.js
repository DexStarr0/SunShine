const mongoose = require("mongoose");

//defining schema for document
const ValidUserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

//create class of user collection
const ValidUser = mongoose.model("VALIDUSER", ValidUserSchema);
module.exports = ValidUser;
