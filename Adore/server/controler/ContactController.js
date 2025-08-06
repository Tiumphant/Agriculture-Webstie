const express = require("express");
const Contact = require("../model/ContactModel");
const route = express.Router();
route.use(express.json());

route.post("/contact", async (req, res) => {
  try {
    const { name, message } = req.body;
    const result = await Contact.create({ name, message });
    res.status(201).json({ message: "successfully submitted", result });
  } catch {
    res.send("error in submitting contact form");
  }
});

module.exports = route;
