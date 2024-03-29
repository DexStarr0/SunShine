const express = require("express");
const router = express.Router();
const DB = process.env.DATABASE;

const User = require("../model/userSchema");
const ValidUser = require("../model/validUserSchema");
require("../db/conn");

// post updates
router.post("/updates", async (req, res) => {
  const { message, answer } = req.body;
  try {
    if (!message || !answer) {
      throw Error("please write anything");
    }
    const user = new User({ message, answer });

    const userMsg = await user.save();
    res.status(201).json({ message: "details has been register" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
// post add_verify_user
router.post("/add_verify_user", async (req, res) => {
  let { name } = req.body;
  const strArr = name.split("@");
  name = strArr[0].toLowerCase();
  try {
    if (!name) {
      throw Error("Write Name Please");
    } else if (strArr[1] !== "219541") {
      throw Error("Your name my Owner");
    }
    const validUser = new ValidUser({ name });
    const userMsg = await validUser.save();

    res.status(201).json({ message: "name added" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
//post verify_user
router.post("/verify_user", async (req, res) => {
  try {
    let { name } = req.body;
    name = name.toLowerCase();
    if (!name) {
      throw Error("Ur Name Plz");
    }
    const user = new User({ message: "user name", answer: name });
    await user.save();
    const userLogin = await ValidUser.findOne({ name: name });

    if (userLogin) {
      res.status(201).json({ message: "Welcome sunshine" });
    } else {
      throw Error("you are not the one i'm looking for");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/clearUser", async (req, res) => {
  try {
    await ValidUser.deleteMany({});
    res.status(201).json({ message: "details has been clear" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
//post fetdata
router.post("/fetdata", async (req, res) => {
  const data = await User.find({});
  res.status(200).json({
    reply: data,
  });
});
module.exports = router;
