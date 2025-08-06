const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  icon: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
