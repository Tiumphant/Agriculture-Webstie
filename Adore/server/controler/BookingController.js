const express = require("express");
const router = express.Router();
const Booking = require("../model/BookingModel");

router.post("/book", async (req, res) => {
  try {
    const { userId, products } = req.body;
    const booking = new Booking({ userId, products });
    await booking.save();
    res.status(200).json({ message: "Booking saved" });
  } catch (err) {
    res.status(500).json({ message: "Error booking service" });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

module.exports = router;
