const express = require("express");
const router = express.Router();
const controllers = require("./controller.js");

router.post("/transactions", controllers.postTransactions);
router.get("/transactions", controllers.getTransactions);

module.exports = router;
