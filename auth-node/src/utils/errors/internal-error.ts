import { StatusCode } from "../../types/status-code.type.js";
import { INTERNAL_SERVER_ERROR } from "../constants.js";
import AppError from "./app-error.js";

class InternalError extends AppError {
  constructor() {
    super(INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_ERROR);
  }
}

export default InternalError;
