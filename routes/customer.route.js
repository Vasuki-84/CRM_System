const express = require("express");
const { customerRegister } = require("../controllers/customer.controller");
const router = express.Router();

// http://localhost:8081/customer/register
router.post("/register", customerRegister);

module.exports = router;
