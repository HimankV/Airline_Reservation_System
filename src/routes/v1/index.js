const express = require("express");

// const { infoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");

const router = express.Router();
console.log(`inside v1 routes`);

router.use("/airplanes", airplaneRoutes);

// router.get("/info", infoController.info);

module.exports = router;
