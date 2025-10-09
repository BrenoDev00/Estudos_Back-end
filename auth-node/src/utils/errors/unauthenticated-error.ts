import AppError from "./app-error.js";
import { StatusCode } from "../../types/status-code.type.js";

class UnauthenticatedError extends AppError {
  constructor(message: string) {
    super(message, StatusCode.UNAUTHENTICATED);
  }
}

export default UnauthenticatedError;
