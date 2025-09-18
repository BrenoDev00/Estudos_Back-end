import { StatusCode } from "../../types/status-code.type.js";
import AppError from "./app-error.js";

class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, StatusCode.NOT_FOUND);
  }
}

export default NotFoundError;
