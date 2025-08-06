const User = require("../model/userModel");
const express = require("express");
const route = express.Router();
route.use(express.json());
const bcrypt = require("bcrypt");

route.get("/registration", async (req, res) => {
  try {
    let result = await User.find();
    res.status(200).send({ result: "done", data: result });
  } catch (err) {
    res.status(500).send({ message: "error in fetching", error: err });
  }
});

route.get("/registration/:id", async (req, res) => {
  try {
    let result = await User.findOne({ _id: req.params.id });
    res.status(200).send({ result: "done", data: result });
  } catch (err) {
    res.status(500).send({ message: "error in fetching", error: err });
  }
});

route.get("/registration/search/:key", async (req, res) => {
  try {
    const key = req.params.key;
    const insensitive = new RegExp(key, "i");
    const result = await User.find({
      $or: [
        { firstName: { $regex: insensitive } },
        { email: { $regex: insensitive } },
        { lastName: { $regex: insensitive } },
      ],
    });
    res.status(200).json({ result: "done", data: result });
  } catch (err) {
    res.status(500).send({ message: "error in fetching", error: err });
  }
});

route.post("/registration", async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, contact } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        message: "First name, last name, email, and password are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      contact,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

route.post("/login", async (req, res) => {
  try {
    if (req.body.email && req.body.password && req.body.role) {
      let result = await User.findOne(req.body).select("-password");
      if (result == null) {
        res.send({ message: "no result found" });
      } else {
        res.status(200).send({ message: "succesefully login", data: result });
      }
    }
  } catch (err) {
    res.status(500).send({ message: "error in login", error: err });
  }
});

route.put("/registration/:id", async (req, res) => {
  try {
    let result = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send({ result: "done", data: result });
  } catch (err) {
    res.status(500).send({ message: "error in posting", error: err });
  }
});

route.delete("/registration/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let result = await User.deleteOne({ _id: id });
    res.status(200).send({ result: "done", data: result });
  } catch (err) {
    res.status(500).send({ message: "error in delete", error: err });
  }
});

module.exports = route;
