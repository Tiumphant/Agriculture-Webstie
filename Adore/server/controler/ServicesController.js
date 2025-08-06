const express = require("express");
const Service = require("../model/ServiceModel");
const router = express.Router();

router.get("/service", async (req, res) => {
  try {
    const result = await Service.find();
    res.status(200).json({
      message: "Services fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching services",
      error: error.message,
    });
  }
});

module.exports = router;
