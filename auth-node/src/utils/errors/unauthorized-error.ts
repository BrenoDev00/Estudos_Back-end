import { StatusCode } from "../../types/status-code.type.js";
import AppError from "./app-error.js";

class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, StatusCode.UNAUTHORIZED);
  }
}

export default UnauthorizedError;
