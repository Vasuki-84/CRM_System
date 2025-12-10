const dealsModel = require("../model/deals.model");

// POST Api

const createDeals = async (req, res) => {
  const { title, description, location, amount, dealStatus } = req.body;

  try {
    if (!title || !description || !location || !amount || !dealStatus) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newDeal = new dealsModel({
      title,
      description,
      location,
      amount,
      dealStatus,
    });
    await newDeal.save();
    res.status(201).json({ message: "Deal created successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// GET API
const getDeals = async (req, res) => {
  try {
    const deals = await dealsModel.find();
    res.status(200).json(deals);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// PUT API
const updateDeals = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDeals = await dealsModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "Deal updated", updatedDeals });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// DELETE API
const deleteDeals = async (req, res) => {
  const { id } = req.params;

  try {
    await dealsModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Deal deleted" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = { createDeals, getDeals, updateDeals, deleteDeals };
