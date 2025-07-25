const express = require("express");
const { AirplaneController } = require("../../controllers");
const router = express.Router();
console.log(`inside airplane routes`);
router.post("/", AirplaneController.createAirplane);
module.exports = router;
