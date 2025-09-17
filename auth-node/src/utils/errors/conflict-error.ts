import AppError from "./app-error.js";
import { StatusCode } from "../../types/status-code.type.js";

class ConflictError extends AppError {
  constructor(message: string) {
    super(message, StatusCode.CONFLICT);
  }
}

export default ConflictError;
