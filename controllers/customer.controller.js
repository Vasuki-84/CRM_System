const customerModel = require("../model/customer.model");
// const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Customer Register API - POST method
const customerRegister = async (req, res) => {
  const { customerName, customerNumber, deal, location } = req.body;

  try {
    if (!customerName || !customerNumber || !deal || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // userId check
    // const userIdCheck = await userModel

    const hashedCustomerNumber = await bcrypt.hash(customerNumber, 10);
    const newCustomer = new customerModel({
      customerName,
      customerNumber: hashedCustomerNumber,
      deal,
      location,
    });
    await newCustomer.save();
    //JWT authentication
    const token = jwt.sign(
      {
        customerId: newCustomer._id,
        customerName,
        deal,
        location,
      },
      process.env.customer_key,
      { expiresIn: "24h" }
    );
    res
      .status(201)
      .json({ message: "Customer registration successfull", token: token });
  } catch (err) {
    res.status(500).json({ message: "Customer registration failed" });
  }
};

module.exports = { customerRegister };
