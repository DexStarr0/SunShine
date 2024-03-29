const DB = process.env.DATABASE;

// Connect MongoDB at default port 27017.
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
