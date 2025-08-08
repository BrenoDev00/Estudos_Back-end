import { Request, Response } from "express";
import { Contact } from "../../../generated/prisma";

export interface IContacController {
  getContacts(req: Request, res: Response): Promise<Response>;
}
