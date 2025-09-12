/* eslint-disable @typescript-eslint/no-explicit-any */
import userService from "../services/user-service.js";
import { Request, Response } from "express";
import { IUserController } from "../types/controllers/user-controller.type.js";
import { userSchema } from "../schemas/user-schema.js";
import { z } from "zod";
import {
  EMAIL_ALREADY_IN_USE,
  INTERNAL_SERVER_ERROR,
} from "../utils/constants.js";
import { StatusCode } from "../types/status-code.type.js";

class UserController implements IUserController {
  async addUser(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    const userValidation = userSchema.safeParse(body);

    if (!userValidation.success) {
      const formmatedUserError = z.prettifyError(userValidation.error);

      return res.status(StatusCode.BAD_REQUEST).send(formmatedUserError);
    }

    try {
      const user = await userService.addUser(body);

      return res.status(StatusCode.CREATED).send(user);
    } catch (error: any) {
      if (error.message === EMAIL_ALREADY_IN_USE)
        return res.status(StatusCode.CONFLICT).send({ message: error.message });

      return res
        .status(StatusCode.INTERNAL_ERROR)
        .send({ message: INTERNAL_SERVER_ERROR });
    }
  }
}

const userController = new UserController();

export default userController;
