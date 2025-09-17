/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { StatusCode } from "../types/status-code.type.js";
import { INTERNAL_SERVER_ERROR } from "../utils/constants.js";
import AppError from "../utils/errors/app-error.js";

function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error instanceof AppError) {
    res.status(error.statusCode).send({ message: error.message });
  } else {
    res
      .status(StatusCode.INTERNAL_ERROR)
      .send({ message: INTERNAL_SERVER_ERROR });
  }
}

export default errorHandler;
