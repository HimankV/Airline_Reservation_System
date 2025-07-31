const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");
// const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

// router.get("/", AirplaneController.getAirplanes);

// router.get("/:id", AirplaneController.getAirplane);

// router.delete("/:id", AirplaneController.destroyAirplane);

module.exports = router;
