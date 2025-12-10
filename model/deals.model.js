const mongoose = require("mongoose");

const dealsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
  dealStatus: {
    type: Boolean,
    required: true,
  },
});

const Deals = new mongoose.model("Deals", dealsSchema);
module.exports = Deals;
