/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { IAuthController } from "../types/controllers/auth-controller.type.js";
import authService from "../services/auth-service.js";
import { StatusCode } from "../types/status-code.type.js";
import InternalError from "../utils/errors/internal-error.js";
import {
  INVALID_USER_CREDENTIALS,
  USER_NOT_FOUND,
} from "../utils/constants.js";
import UnauthorizedError from "../utils/errors/unauthorized-error.js";
import NotFoundError from "../utils/errors/not-found-error.js";

class AuthController implements IAuthController {
  async login(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    try {
      const accessToken = await authService.login(body);

      return res.status(StatusCode.OK).send(accessToken);
    } catch (error: any) {
      if (error.message === INVALID_USER_CREDENTIALS)
        throw new UnauthorizedError(INVALID_USER_CREDENTIALS);

      if (error.message === USER_NOT_FOUND)
        throw new NotFoundError(USER_NOT_FOUND);

      throw new InternalError();
    }
  }
}

const authController = new AuthController();

export default authController;
