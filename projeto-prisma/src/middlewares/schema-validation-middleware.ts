import { NextFunction, Request, Response } from "express";
import z, { ZodObject } from "zod";

export function schemaValidationMiddleware(schema: ZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    const schemaValidation = schema.safeParse(req.body);

    const formattedErrorMessage = z.prettifyError(schemaValidation.error!);

    if (!schemaValidation.success) {
      return res.status(400).send(formattedErrorMessage);
    }

    next();
  };
}
