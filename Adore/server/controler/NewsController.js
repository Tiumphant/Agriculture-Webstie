const express = require("express");
const News = require("../model/Newsmodel");
const route = express.Router();
route.use(express.json());

route.get("/news", async (req, res) => {
  try {
    const result = await News.find().sort({ date: -1 });
    res.status(200).json({ message: "successfully get", result });
  } catch {
    res.send("error in getting news api");
  }
});

module.exports = route;
