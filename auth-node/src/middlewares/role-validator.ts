import { Request, Response, NextFunction } from "express";
import userService from "../services/user-service.js";
import NotFoundError from "../utils/errors/not-found-error.js";
import { UNAUTHORIZED_USER, USER_NOT_FOUND } from "../utils/constants.js";
import UnauthorizedError from "../utils/errors/unauthorized-error.js";
import InternalError from "../utils/errors/internal-error.js";

const roleValidator = (permittedRole: string) => {
  return async (
    req: Request,
    _: Response,
    next: NextFunction
  ): Promise<void> => {
    const { userId } = req.params;

    try {
      const searchedUser = await userService.getUserById(userId!);

      if (!searchedUser) throw new NotFoundError(USER_NOT_FOUND);

      const { name } = searchedUser.role;

      const isUserAuthorized = permittedRole === name;

      if (!isUserAuthorized) throw new UnauthorizedError(UNAUTHORIZED_USER);

      next();
    } catch {
      throw new InternalError();
    }
  };
};

export default roleValidator;
