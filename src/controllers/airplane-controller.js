// const { response } = require("express");
const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
async function createAirplane(req, res) {
  try {
    console.log(`inside airplane controller`);
    console.log(req.body);
    const airplane = await AirplaneService.createAirplane({
      Model_No: req.body.Model_No,
      Capacity: req.body.Capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: `Sucessfully created an airplane`,
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating airplane",
      data: {},
      error: error,
    });
  }
}
module.exports = {
  createAirplane,
};
