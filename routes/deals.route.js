const express = require("express");
const router = express.Router();

const {
  createDeals,
  getDeals,
  updateDeals,
  deleteDeals,
} = require("../controllers/deals.controller");


// http://localhost:8081/deals/createDeal
router.post("/createDeal", createDeals);

// http://localhost:8081/deals
router.get("/", getDeals);


// http://localhost:8081/deals/<id>
router.put("/update/:id", updateDeals);

// http://localhost:8081/deals/<id>
router.delete("/:id", deleteDeals);

module.exports = router;
