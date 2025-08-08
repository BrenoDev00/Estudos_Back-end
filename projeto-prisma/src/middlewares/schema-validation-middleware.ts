import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export function schemaValidationMiddleware(schema: ZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).send(validation.error.format());
    }

    next();
  };
}
