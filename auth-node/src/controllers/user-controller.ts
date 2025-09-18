/* eslint-disable @typescript-eslint/no-explicit-any */
import userService from "../services/user-service.js";
import { Request, Response } from "express";
import { IUserController } from "../types/controllers/user-controller.type.js";
import { EMAIL_ALREADY_IN_USE, USER_NOT_FOUND } from "../utils/constants.js";
import { StatusCode } from "../types/status-code.type.js";
import ConflictError from "../utils/errors/conflict-error.js";
import InternalError from "../utils/errors/internal-error.js";
import NotFoundError from "../utils/errors/not-found-error.js";

class UserController implements IUserController {
  async getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const user = await userService.getUserById(id!);

      return res.status(StatusCode.OK).send(user);
    } catch (error: any) {
      if (error.message === USER_NOT_FOUND)
        throw new NotFoundError(USER_NOT_FOUND);

      throw new InternalError();
    }
  }

  async addUser(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    try {
      const user = await userService.addUser(body);

      return res.status(StatusCode.CREATED).send(user);
    } catch (error: any) {
      if (error.message === EMAIL_ALREADY_IN_USE)
        throw new ConflictError(EMAIL_ALREADY_IN_USE);

      throw new InternalError();
    }
  }
}

const userController = new UserController();

export default userController;
