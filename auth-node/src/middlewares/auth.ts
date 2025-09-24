import { Request, Response, NextFunction } from "express";
import UnauthorizedError from "../utils/errors/unauthorized-error.js";
import { INVALID_TOKEN, TOKEN_NOT_SPECIFIED } from "../utils/constants.js";
import { verify } from "jsonwebtoken";

const authVerify = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  const accessToken = req.headers.authorization;

  if (!accessToken) throw new UnauthorizedError(TOKEN_NOT_SPECIFIED);

  const formattedAccessToken = accessToken.split(" ")[1] as string;

  try {
    verify(formattedAccessToken, process.env.HASH_SECRET as string);

    next();
  } catch {
    throw new UnauthorizedError(INVALID_TOKEN);
  }
};

export default authVerify;
