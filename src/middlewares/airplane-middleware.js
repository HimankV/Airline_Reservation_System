const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.Model_No) {
    ErrorResponse.message = `Something went wrong while creating airplane`;

    ErrorResponse.error = new AppError([
      `Model no. not found in the oncoming request in the correct form.`,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest };
